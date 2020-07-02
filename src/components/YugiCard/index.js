import React, { useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import moduleStyles from "./card.module.css";

import { useCardImage } from 'hooks'

export default function YugiCard({ name, imgSrc, onClick, children }) {

  const [backgroundLoading, BackgroundImage, backgroundError] = useCardImage(require("assets/back.png"))
  const [cardImageLoading, CardImage, cardImageError] = useCardImage(imgSrc)
  const [hover, setHover] = useState(false)

  return (
    <>
      <Card
        draggable
        className={moduleStyles.card}
        style={styles.Card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}>
        <BackgroundImage />
        {
          !backgroundLoading && !backgroundError && (
            <Card.ImgOverlay
              className="p-0 d-flex justify-content-center align-items-center"
              >

              {
                cardImageLoading && (
                  <Spinner
                    style={styles.Spinner}
                    animation="grow"
                    variant="light" />
                )
              }
              {
                cardImageError ? (
                  <Card.Text
                    className="px-3 d-flex align-items-center text-white text-center h-100 w-100"
                    style={{
                      fontFamily : "fantasy",
                      backgroundColor: "black",
                      opacity: "0.7"
                    }}>
                    {name ? `${name} image is not Available` : 'NO IMAGE AVAILABLE'}
                  </Card.Text>
                ) : (
                    <CardImage />
                  )
              }
            </Card.ImgOverlay>
          )
        }
        {
          hover && (
            <Card.ImgOverlay
              className="p-0 d-flex justify-content-center align-items-end">
              {
                children
              }
            </Card.ImgOverlay>
          )
        }
      </Card>
    </>
  )
}

const styles = {
  Card: {
    maxWidth: '180px',
    minWidth: '180px',
    height: '260px',
    margin: "5px",
    backgroundColor: "black",
    transition: "transform .2s",
  },
  Spinner: {
    width: '70px',
    height: '100px',
  },
}
