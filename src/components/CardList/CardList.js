import React from 'react'
import Card from '../Card';

export default function CardList(props) {


  return (
    <div className="row">
      { props.cardList.map((card) => {
          return <Card card={card} key={card.id} addToDeck={()=>props.addToDeck(card)}></Card>
      })}
    </div>
  )
}
