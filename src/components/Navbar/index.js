import React from 'react'
import {
  Nav,
  NavDropdown,
  Navbar
} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from 'react-router-dom'

import useRedux from 'hooks/useRedux'
import { AddDeckForm, TextYugi } from "components"
import { logout, setSelectedDeck } from "store/actions"

import background from "assets/nav.jpg"

export default function NavigationBar({ decks, addDeck, loadingDecks }) {
  const { deck, dispatch } = useRedux()
  const location = useLocation()

  const logoutClick = () => {
    dispatch(logout())
  }

  const selectDeck = (deck) => {
    dispatch(setSelectedDeck(deck))
  }

  return (
    <Navbar style={styles.nav} sticky="top" className="py-0" id="navbar">
        <TextYugi 
          type="matrix" 
          size="lg" 
          component={Navbar.Brand}>
          YugiDeck
        </TextYugi>
      <Nav className="d-flex justify-content-between align-items-center w-100" style={styles.link}>
        <div className="d-flex">
          <LinkContainer to="/">
            <Nav.Link>
              <TextYugi>Home</TextYugi>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/search">
            <Nav.Link>
              <TextYugi>Search</TextYugi>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>
              <TextYugi>About</TextYugi>
            </Nav.Link>
          </LinkContainer>
        </div>
        <div className="d-flex">
          { !location.pathname.includes("/decks") &&
            <NavDropdown 
              style={styles.link} 
              className="testttt"
              title={deck.name || "Select to build a deck..."}
              >
              {loadingDecks && <NavDropdown.Item disabled>Loading...</NavDropdown.Item>}
              {
                decks.map(deck => (
                  <NavDropdown.Item key={deck.id}
                    onClick={() => selectDeck(deck)} style={styles.dropdownItem}>{deck.name}</NavDropdown.Item>)
                )
              }
              <NavDropdown.Divider />
              <div className="text-center">
                <AddDeckForm addDeck={addDeck}/>
              </div>
            </NavDropdown>
          }
          <LinkContainer to="/decks"><Nav.Link>My Decks</Nav.Link></LinkContainer>
          <LinkContainer to="/auth" onClick={logoutClick}><Nav.Link>Logout</Nav.Link></LinkContainer>
        </div>
      </Nav>
    </Navbar>
  )
}

const styles = {
  nav: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    fontFamily: "MatrixReguler",
    zIndex: 20,
  },
  brand: {
    fontSize: "2rem",
  },
  link: {
    fontSize: "1.5rem",
  },
  dropdownItem : {
    fontSize: "1.4rem",
    lineHeight: "normal",
  }
}
