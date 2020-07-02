import React, { useState, useEffect } from 'react'
import { Col, Container} from 'react-bootstrap'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'

import { Sidebar, TextYugi } from "components"
import { MyCards } from "views"
import { background } from "styles"

function getPageHeight() {
  const myNavbarHeight = document.getElementById("navbar").offsetHeight
  const windowHeight = window.innerHeight
  return (windowHeight - myNavbarHeight)
}

export default function MyDecks({ uid, decks, addDeck, removeDeck, loadingDecks }) {
  
  const [ pageHeight, setPageHeight ] = useState(window.innerHeight)
  const {url, path} = useRouteMatch()
  const history = useHistory()

  const [selectedDeckName, setSelectedDeckName] = useState("")

  useEffect(() => {
    function onResize() {
      setPageHeight(getPageHeight())
    }
    setPageHeight(getPageHeight())
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  function selectDeck(deck) {
    history.push(`${url}/${deck.id}`)
    setSelectedDeckName(deck.name)
  }
  return (
    <div id="page-container"
      style={{ minHeight: pageHeight }}
      className="w-100" >
      <Sidebar 
        decks={decks} 
        addDeck={addDeck} 
        removeDeck={removeDeck}
        selectDeck={selectDeck}
        />
      <Col id="deck-detail"
        style={styles.container}
        className="h-100" >
        <Container style={background} className="h-100 p-2" fluid>
          <Switch>
            <Route path={`${path}/:deckId`} component={() => <MyCards uid={uid} deckName={selectedDeckName}/>} />
            <Route path={`${path}/`}>
              <div className="h-100 w-100 d-flex justify-content-center align-items-center">
              
                <TextYugi
                  type="fantasy"
                  size="lg">
                  Please select a deck from sidebar.
                </TextYugi>
               
              </div>
            </Route>
          </Switch>
        </Container>

      </Col>
    </div>
  )
}

const styles = {
  container : {
    padding : "4rem 3rem 3rem 4rem"
  }
}