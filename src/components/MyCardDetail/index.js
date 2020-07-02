import React, { useState, useEffect } from 'react'
import { Button, Spinner } from "react-bootstrap"

import { useCardImage } from "hooks";
import { Level, TextYugi } from "components"
import { fontMatrix15, bgBlack } from "styles"
import { showSuccess, showError } from "config/swal"

export default function MyCardDetail({ selectedCard, isDragging, removeCard }) {
  const [cardLoading, CardImage, cardError] = useCardImage(selectedCard?.imageUrl)
  const [isViewImage, setIsViewImage] = useState(true)
  const [isHover, setHover] = useState(false)

  useEffect(() => {
    if (cardError) {
      setIsViewImage(false)
    }
  }, [cardError])

  function changeView() {
    setIsViewImage(!isViewImage)
  }

  function onDragOver(event) {
    event.preventDefault()
  }
  function dragHover(event, payload) {
    event.preventDefault()
    setHover(payload)
  }

  function onDrop(event) {
    event.preventDefault()

    let firestoreId = event.dataTransfer.getData("firestoreId")
    let cardName = event.dataTransfer.getData("name")
    removeCard(firestoreId)
      .then(_ => {
        showSuccess(`Successfully remove ${cardName} from your deck`)
      })
      .catch(_ => {
        showError(`Error while deleting your card`)
      })
  }

  return (
    <div
      style={{ width: "400px" }}
      className={`d-flex flex-column justify-content-between align-items-center p-4 h-100`}>
      {
        isDragging ? (
          <div
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragEnter={(e) => dragHover(e, true)}
            onDragLeave={(e) => dragHover(e, false)}
            className="text-center h-100 w-100">
            <TextYugi
              glow
              type="fantasy"
              color="white"
              className="my-auto"
            >{isHover ? "Remove Card" : "Drop Here"}
            </TextYugi>
          </div>
        ) : (
            selectedCard ? (
              <>
                <div className={isViewImage ? "" : 'd-none'}>
                  <CardImage />
                </div>
                {
                  (cardLoading && isViewImage) && (
                    <div className="text-center">
                      <Spinner style={{ color: "black" }} animation="border" />
                      <TextYugi type="fantasy">Loading image....</TextYugi>
                    </div>
                  )
                }
                <div className={`${isViewImage ? 'd-none' : ""} align-self-start`}>
                  <CardInfo card={selectedCard} />
                </div>
                <Button
                  className="mt-3"
                  style={{ ...bgBlack, ...fontMatrix15 }}
                  disabled={cardError}
                  variant="dark"
                  onClick={changeView}>
                  <TextYugi
                    color="white">
                    Show {isViewImage ? "Description" : "Image"}
                  </TextYugi>
                </Button>
              </>
            ) : (
                <div className="my-auto text-center">
                  <TextYugi type="fantasy" size="sm"><strong>Click</strong> any card to show card information</TextYugi>
                  <TextYugi type="fantasy" size="sm"></TextYugi>
                  <TextYugi type="fantasy" size="sm"><strong>Drop</strong> here to remove it from your deck</TextYugi>
                </div>
              )
          )
      }
    </div>
  )
}

function CardInfo({ card }) {
  return (
    <div className="w-100">
      <div id="card-detail-title">
        <TextYugi
          normal
          size="xl"
          style={styles.title}>
          {card.name}
        </TextYugi>
        <div style={{ marginTop: "-.5rem" }}>
          {
            card.level ? <Level level={card.level} /> : <TextYugi style={styles.title}>({card.type})</TextYugi>
          }
        </div>
      </div>
      <div id="card-detail-info" className="mt-4">
        {
          card.level && (
            <>
              <TextYugi
                normal
                className="mt-4 mb-0"
                style={{
                  fontWeight: "bold"
                }}>
                POWER
              </TextYugi>
              <TextYugi
                normal
                type="fantasy"
                size="sm"
                className="ml-4">
                {`ATK/${card.atk} DEF/${card.def}`}
              </TextYugi>
            </>
          )
        }
        <TextYugi
          normal
          className="mt-4 mb-0"
          style={{
            fontWeight: "bold"
          }}>
          DESCRIPTION
              </TextYugi>
        <TextYugi
          normal
          type="fantasy"
          size="sm"
          className="ml-4">
          {card.desc}
        </TextYugi>
      </div>


    </div>
  )
}

const styles = {
  title: {
    fontWeight: "bold",
    marginBottom: "0"
  }
}