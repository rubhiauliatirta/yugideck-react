import React, { useState } from "react";
import { CardGroup, Card, Button } from "react-bootstrap";

import { useRedux } from "hooks"
import { setDetailId } from "store/actions"
import { YugiCard, TextYugi } from 'components';
import { addCardToDeck } from 'helpers/cards'

import moduleStyles from './style.module.css'
import { bgBlack } from "styles"

export default function CardList({ cards }) {

  const { deck, dispatch } = useRedux()


  const [addLoading, setAddLoading] = useState(false)

  function addCard(event, card) {
    event.stopPropagation()
    addCardToDeck(card, deck, setAddLoading)
  }

  return (
    <CardGroup className="p-4 justify-content-center">
      {
        cards.map(card => (
          <YugiCard
            key={card.id}
            name={card.name}
            imgSrc={card.card_images[0].image_url}
            onClick={() => dispatch(setDetailId(card.id))}>
            {
              <Button
                style={{ ...styles.Button, ...bgBlack }}
                className={deck.name ? moduleStyles.button : moduleStyles.noclick}
                variant="dark"
                onClick={(e) => addCard(e, card)}
                disabled={addLoading}>

                <TextYugi
                  size="md"
                  type="matrix"
                  color="white"
                  className="text-center"
                  component={Card.Text}
                  style={styles.ButtonText}
                  >
                    {addLoading ? "ADDING CARD.." : `ADD TO DECK`}
                </TextYugi>
              </Button>
            }
          </YugiCard>
        ))
      }
    </CardGroup>
  )
}

const styles = {
  Button: {
    width: "100%",
    padding: 0,
    margin: "5px",
  },
  ButtonText: {
    padding: 0,
    fontSize: "1.5rem",
    fontFamily: "MatrixReguler",
    color: "white",
    textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 60px #0073e6, 0 0 70px #0073e6",
  }
}