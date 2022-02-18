import React from 'react'
/*
Valores de la api
element.name, element.id, element.prices["eur"], element.set_name, 
element.colors, element.type_line, element.cmc, 
element.image_uris.png, element.scryfall_uri, element.rarity, 
element.power, element.toughness));
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
