import React from 'react'
import Card from '../Card';
/**
 * Componente Lista de Cartas, recibe por props la lista de cartas recogida de la api y crea un
 * componente carta por cada uno en bucle. Le pasa al componente hijo los datos de la carta y
 * la función de añadir al deck del padre.
 * El parametro key debe ser unico (usamos el id de la api), ya que React lo utiliza para re-renderizar
 * la vista.
 * @param {*} props 
 * @returns 
 */
export default function CardList(props) {
  return (
    <div className="row">
      { props.cardList.map((card) => {
          return <Card card={card} key={card.id} addToDeck={()=>props.addToDeck(card)}></Card>
      })}
    </div>
  )
}
