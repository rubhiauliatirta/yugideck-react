import React from 'react';
import { MyCard } from "components";

export default function MyCardList({ cards, selectCard, setIsDragging }) {

  return (
    <div className="d-flex justify-content-start flex-wrap" >
    {
      cards?.map(card => (
        <MyCard key={card.id} card={card} selectCard={selectCard} setIsDragging={setIsDragging} />
      ))
    }
    </div>
  );
}
