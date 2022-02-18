import React, { useEffect, useState } from 'react'
import './App.css';
import CardList from './components/CardList/CardList';
import Deck from './components/Deck';
import Navbar from './components/Navbar/Navbar';
/**
 * Componente padre de la App. Posee todas las variables de estado y los efectos.
 * Estado: 
 *    cardList -> Lista de cartas recibida de la app. Se envia a los componentes CardList y Card
 *    dataIsLoaded -> Booleana que verifica que la api ha enviado los datos
 *    url -> Url de la api a la que se hacen peticiones. Es reseteada desde el NavBar
 *    deckList -> Lista de cartas seleccionadas por el usuario, pasadas al componente Deck. 
 *                Es un array de objetos que contiene la carta y la cantidad de la carta.
 *                La estructura se genera en la funcion addToDeck.
 * Efecto:
 *    Tenemos un useEffect escuchando cambios sobre la variable url que realiza petición a la
 *    api cuando cambia.
 * Variables:
 *    totalCards -> Variable del total de cartas seleccionadas en el deck, se calcula sumando las cartas
 *                  y la cantidad de cada una.
 * @returns 
 */
function App() {
  const [cardList, setCardList] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [url, setUrl] = useState("https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints");
  const [decklist, setDecklist] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setCardList(data.data);
      setDataIsLoaded(true);
    }
    fetchData();
  }, [url]);

  const totalCards = decklist
    .map(card => card.quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  
    /**
   * Método que añade la carta obtenida al clickar un botón al deck siguiendo la lógica de 
   * max 60 cartas totales y max 4 copias por carta.
   * @param {*} card 
   */
  function addToDeck(card) {
    let found = decklist.find(element => element.card === card);
    if (found !== undefined) {
      if (found.quantity < 4 && totalCards < 60) {
        let newDeckList = [...decklist];
        newDeckList[newDeckList.indexOf(found)].quantity++;
        setDecklist(newDeckList);
      }
    } else {
      if (totalCards < 60) {
        let newDeckList = [...decklist];
        newDeckList = newDeckList.concat([
          {
            'card': card,
            'quantity': 1
          }
        ]);
        setDecklist(newDeckList);
      }
    }
  }
  /**
   * Método que baja la cantidad de la carta obtenida al clickar un boton o la elimina si 
   * solo queda 1.
   * @param {*} card 
   */
  function removeFromDeck(card) {
    let found = decklist.find(element => element.card === card);
    if (found !== undefined) {
      if (found.quantity > 1) {
        let newDeckList = [...decklist];
        newDeckList[newDeckList.indexOf(found)].quantity--;
        setDecklist(newDeckList);
      }
      else if (found.quantity === 1) {
        let newDeckList = [...decklist];
        newDeckList.splice(newDeckList.indexOf(found), 1);
        setDecklist(newDeckList);
      }
    }
  }
  //Renderizamos la vista con las cartas solo si han llegado los datos de la API
  if (dataIsLoaded) {
    return (
      <>
        <Navbar setUrl={setUrl}></Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <CardList cardList={cardList} addToDeck={addToDeck}></CardList>
            </div>
            <div className="col-4">
              <Deck deckList={decklist} addToDeck={addToDeck} removeFromDeck={removeFromDeck} totalCards={totalCards}></Deck>
            </div>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      <div>No se han recibido los datos de la api</div>
    );
  }
}
export default App;
