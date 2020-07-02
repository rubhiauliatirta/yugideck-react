import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { MyCardDetail, MyCardList, TextYugi } from "components"
import { useFirestore } from "hooks"
import { background, deleteZone } from "styles"

export default function MyCards({ uid, deckName }) {
  const [selectedCard, setSelectedCard] = useState(null)
  const { deckId } = useParams()
  const firestoreUrl = deckId ? `users/${uid}/decks/${deckId}/cards` : ""
  const { data, remove, loading } = useFirestore(firestoreUrl, !!deckId, "name")
  const [isDragging, setIsDragging] = useState(false)

  function selectCard(card) {
    setSelectedCard(card)
  }
  function setDrag(payload) {
    setIsDragging(payload)
  }

  const colBackgroundStyle = isDragging ? deleteZone : ({
    ...background,
    boxShadow: "0px 0px 40px black"
  })

  return (
    <Row className="p-3 h-100">
      <Col className="h-100">
        <TextYugi
          type="fantasy"
          size="lg">{`${deckName} (${data.length}/60)`}</TextYugi>
        {
          loading ? <TextYugi type="fantasy">Loading cards...</TextYugi>: (
            <MyCardList
              cards={data}
              selectCard={selectCard}
              setIsDragging={setDrag} />
          )
        }
      </Col>
      <div xs="auto" style={colBackgroundStyle}
        className="mr-2 p-0">
        {
          <MyCardDetail selectedCard={selectedCard} isDragging={isDragging} removeCard={remove} />
        }
      </div>
    </Row>
  );
}
