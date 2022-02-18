import React from 'react'
/**
 * Componente Carta, recibe por props el valor de la carta concreta, y desde ahi los representamos.
 * Además también recibe por props la función de añadir al deck, ya que la lista de cartas seleccionadas esta en el padre.
 * @param {*} props 
 * @returns 
 */
export default function Card(props) {
  return (
    <>
      <div className="card col-3 px-4 my-2 border-0 text-center">
        <img className="card-img-top" src={props.card.image_uris.png} alt="Card art"/>
          <div className="card-body">
            <h5 className="card-title">{props.card.name}</h5>
            <button onClick={props.addToDeck} className="btn btn-primary">Add to Deck</button>
          </div>
      </div>
    </>
  )
}
