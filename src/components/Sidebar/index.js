import React from 'react'
import { scaleRotate as Menu } from 'react-burger-menu'
import { Image, Nav, Button } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/bs'

import { deleteConfirmation } from "config/swal"
import { useRedux } from 'hooks'
import AddDeckForm from 'components/AddDeckForm'

export default function Sidebar({ decks, addDeck, removeDeck, loadingDecks, selectDeck }) {

  const { user } = useRedux()

  function showDelete(deck) {
    deleteConfirmation(deck.name, function () {
      removeDeck(deck.id)
    })
  }


  return (
    <Menu
      isOpen={true}
      styles={stylesSidebar}
      className="d-flex flex-column"
      pageWrapId={"deck-detail"}
      outerContainerId={"page-container"}
      disableAutoFocus>
      <Nav.Item className="d-flex flex-column align-items-center">
        <Image style={styles.images} roundedCircle src={user.data.photoURL || require("assets/pp.jpg")} />
        <p className="text-white mt-4" style={styles.font}>{user.data.displayName}</p>
        <AddDeckForm addDeck={addDeck} />
      </Nav.Item>
      <div className="mt-3" style={styles.font}>Deck list: </div>
      {
        loadingDecks ? <Nav.Item disabled>Loading...</Nav.Item> : (
          decks.map(deck => (
            <Nav.Item key={deck.id} className="d-flex justify-content-between align-items-center">
              <Button
                variant="link"
                style={styles.font}
                onClick={() => selectDeck(deck)}>{deck.name}</Button>
              <Button variant="link" onClick={() => showDelete(deck)} ><BsTrashFill color="red" /></Button>
            </Nav.Item>
          ))
        )
      }
    </Menu>
  )
}

var stylesSidebar = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '20px',
    margin: "1rem"
  },
  bmBurgerBars: {
    background: 'white',
  },
  bmBurgerBarsHover: {
    background: 'black',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const styles = {
  images: {
    width: "100px",
    height: "100px",
    border: "white solid 1px",
    animation: "glowBox 1s ease-in-out infinite alternate",
  },
  font: {
    fontFamily: "fantasy",
    color: "white"
  },
  formButton: {
    border: "white solid 1px",
    textDecoration: "none"
  },
}
