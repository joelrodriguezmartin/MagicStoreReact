import React from 'react'
/**
 * Componente Deck. Recibe por props los datos de la lista de cartas seleccionadas, el numero de cartas 
 * y las funciones de añadir y retirar del deck. Crea etiquetas TR en bucle por cada carta seleccionada con sus
 * parametros para la vista.
 * @param {*} props 
 * @returns 
 */
export default function Deck(props) {
  const imgstyle = {
    width: '35px'
  }
  let totalPrice = 0;
  return (
    <>
      <h4 className="ms-3 mt-3 text-center">Selected</h4>
      <table className="table text-center ms-3 mt-3">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody id="items">
          {props.deckList.map((card) => {
            totalPrice += card.quantity * card.card.prices["eur"];
            return (
              <tr key={card.card.id}>
                <td><img style={imgstyle} src={card.card.image_uris.png} alt={card.name} /></td>
                <td> {card.card.name}</td>
                <td> {card.card.prices["eur"]} </td>
                <td >{card.quantity}</td>
                <td>
                  <button onClick={() => props.addToDeck(card.card)} className="btn btn-dark">+</button>
                  <button onClick={() => props.removeFromDeck(card.card)} className="btn btn-danger">-</button></td>
                <td>{(card.quantity * card.card.prices["eur"]).toFixed(2)}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr id="footer">
            <th scope="row" colSpan="5" id="empty">Total Cards: {props.totalCards} | Total Price: {totalPrice.toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
