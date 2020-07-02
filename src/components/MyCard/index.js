import React, { useState } from 'react';
import { Image } from "react-bootstrap";

export default function MyCard({ card, selectCard, setIsDragging }) {

  const [src, setSrc] = useState(card.imageUrlSmall)

  function onError(event) {
    event.target.onError = null
    setSrc(require("assets/back.png"))
  }

  function onDragStart(event, card){
    setIsDragging(true)
    event.dataTransfer.setData("firestoreId", card.id)
    event.dataTransfer.setData("name", card.name )
  }

  function onDragEnd(){
    setIsDragging(false)
  }
  return (

    <Image 
      draggable
      src={src} 
      onError={onError} 
      onClick={() => selectCard(card)}
      onDragStart={(e) => onDragStart(e, card)}
      onDragEnd={onDragEnd}
      style={{
        width: "60px", 
        height: "88px"
      }}  
    />
  )
}
