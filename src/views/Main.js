import React from 'react'
import Navbar from 'components/Navbar'
import {
  Container,
  Row,
} from 'react-bootstrap'
import {
  Route,
  Switch,
} from 'react-router-dom'
import {
  Explore,
  MyDecks,
  Search,
  TechStack
} from "views"
import { useFirestore, useRedux } from 'hooks'
import {DetailModal} from "components"

export default function Main() {
  const { user } = useRedux()
  const { data, add, remove, loading } = useFirestore(`users/${user.data.uid}/decks`, true)

  return (
    <>
      <Navbar decks={data} addDeck={add} loadingDecks={loading}></Navbar>
      <Container fluid >
        <Row>
          <Switch>
            <Route exact path="/">
              <Explore />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/about">
              <TechStack />
            </Route>
            <Route path="/decks">
              <MyDecks
                uid={user.data.uid}
                decks={data}
                addDeck={add}
                removeDeck={remove}
                loadingDecks={loading} />
            </Route>
          </Switch>
          <DetailModal />
        </Row>
      </Container>
    </>
  )
}





