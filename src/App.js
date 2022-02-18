import React, { useEffect, useState } from 'react'
import './App.css';
import CardList from './components/CardList/CardList';
import Deck from './components/Deck';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [cardList, setCardList] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [url, setUrl] = useState("https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints");
  const [decklist, setDecklist] = useState([]);

  const totalCards = decklist
    .map(card => card.quantity)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setCardList(data.data);
      setDataIsLoaded(true);
    }
    fetchData();
  }, [url]);

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
