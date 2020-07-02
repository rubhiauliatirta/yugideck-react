import React, { useState, useEffect } from 'react';
import axios from 'axios'
import axiosError from "helpers/axiosError"

import { Modal, Button, Container, Row, Col, Table } from 'react-bootstrap'
import { useRedux } from "hooks"
import { DetailTitleLoader, DetailContentLoader, YugiCard, Level, TextYugi } from "components"

import { setDetailId } from "store/actions"
import background from "assets/nav.jpg"
import { addCardToDeck } from 'helpers/cards'


export default function DetailModal() {

  const { yugioh, deck, dispatch } = useRedux()

  const { detailId } = yugioh
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (detailId !== null) {
      setShow(true)
      setLoading(true)
      axios({
        method: "get",
        url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?&id=${detailId}&view=all`
      })
        .then(({ data }) => {
          setCard(data.data[0])
        })
        .catch(axiosError)
        .finally(_ => setLoading(false))
    }
  }, [detailId])

  function addToDeck() {
    addCardToDeck(card, deck, function () { })
    setShow(false)
  }

  function handleClose() {
    setShow(false)
    dispatch(setDetailId(null))
    setCard({})
  }

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      {
        show && (
          <>
            <Modal.Header closeButton style={styles.background}>
              <Modal.Title>
                {
                  loading ? (<DetailTitleLoader />) : (
                    <TextYugi
                      normal
                      size="lg">
                      {card.name}
                    </TextYugi>
                  )
                }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "black" }}>
              <Container fluid>
                <Row>
                  {
                    loading ? (<DetailContentLoader />) : (
                      <>
                        <YugiCard imgSrc={card.card_images[0].image_url} />
                        <CardDescription card={card} />
                      </>
                    )
                  }
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer style={styles.background}>
              <Button variant="dark" style={styles.button} onClick={addToDeck} disabled={!card.name}>
                <TextYugi
                  normal
                  color="white">
                  ADD TO DECK
                </TextYugi>
              </Button>
            </Modal.Footer>
          </>
        )
      }
    </Modal>
  )
}

const styles = {
  button: {
    backgroundColor: "black"
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
  },
}

function CardDescription({ card }) {
  let spellCard = {
    1: ["Type", "type"],
    4: ["Race", "race"],
    6: ["Description", "desc"],
  }

  let monsterCard = {
    ...spellCard,
    2: ["Attack", "atk"],
    3: ["Defense", "def"],
    5: ["Attribute", "attribute"],
  }

  let descriptions = (card.level !== undefined) ? Object.values(monsterCard) : Object.values(spellCard)

  return (
    <Col xs>
      <Table borderless size="sm" style={{ fontFamily: "fantasy", color: "white" }}>
        <tbody>
          {
            card.level && (
              <tr>
                <td>Level</td>
                <td className="d-flex">
                  <Level level={card.level} />
                </td>
              </tr>
            )
          }
          {
            descriptions.map((data, index) => (
              <tr key={index}>
                <td>{data[0]}</td>
                <td>{card[data[1]]}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Col>
  )
}

