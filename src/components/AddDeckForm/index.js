import React, { useState } from 'react';
import { bgGray } from "styles"
import {
  InputGroup,
  Form,
  Button
} from 'react-bootstrap'
import {
  BsXSquare
} from "react-icons/bs"

export default function AddDeckForm({ addDeck }) {

  const [deckName, setNewDeckName] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  const addNewDeck = (e) => {
    e.preventDefault()
    addDeck({
      name: deckName.toUpperCase()
    }).then(_ => {
      setNewDeckName("")
    })
      .finally(_ => setIsCreating(false))
    setNewDeckName("Adding...")

  }


  return isCreating ? (
    <Form onSubmit={addNewDeck} className="px-1">
      <InputGroup className="align-items-center">
        <Form.Control
          style={styles.form}
          sm={10}
          onChange={(e) => setNewDeckName(e.target.value)}
          type="text"
          placeholder="Deck name..."
          maxLength="15"
          required
          value={deckName}
        />
        <InputGroup.Append>
          <Button variant="link"
            onClick={() => setIsCreating(false)}>
            <BsXSquare color="red"/>
            </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  ) : (
      <Button variant="light"
        className="mx-3"
        style={{...styles.button, ...bgGray}}
        onClick={() => setIsCreating(true)}>
        CREATE NEW DECK
      </Button>
    )
}

const styles = {
  form : {
    fontFamily : "MatrixRegular",
    textTransform : "uppercase",
    fontSize : ".75rem",
  },
  button : {
    fontFamily : "MatrixRegular",
    lineHeight: "normal",
    fontSize : "1rem",
  }
}
