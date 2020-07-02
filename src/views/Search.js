import React, { useState } from 'react'
import { 
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
  Spinner
} from 'react-bootstrap'

import CardList from "components/CardList"
import useSearchCard from "hooks/useSearchCard"
import { buttonGold, fontMatrix15 } from "../styles"


export default function Search(){

  const [query, setQuery] = useState("")
  const { loading, result, search } = useSearchCard()

  const formOnChange = (event) => {
    setQuery(event.target.value)
  }

  const formOnSubmit = (event) => {
    event.preventDefault()
    search(query)
  }

  return (
    <Col>
      <Form onSubmit={formOnSubmit} className="mt-4">
        <InputGroup className="w-50">
          <FormControl 
            style={fontMatrix15}
            className="py-0"
            placeholder="Enter card name..."
            onChange={formOnChange}
            required/>
          <InputGroup.Append>
            <Button 
              className="py-0 d-flex justify-content-center align-items-center"
              type="submit" 
              disabled={loading}
              variant="light"
              style={{ ...buttonGold, ...fontMatrix15}}>
              {loading ? (
                <>
                <Spinner 
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  />
                <span className="ml-2">Searching...</span>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      <CardList cards={result}/>
    </Col>
  )
}