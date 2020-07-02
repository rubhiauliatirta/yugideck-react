import { showSuccess, showError } from "config/swal"
import { addCardFunction } from "config/firebaseFunctions"

export function addCardToDeck(card, deck, setAddLoading) {
  if (deck.name) {
    setAddLoading(true)
    let newCard = {
      cardId: card.id,
      name: card.name,
      type: card.type,
      desc: card.desc,
      imageUrl: card.card_images[0].image_url,
      imageUrlSmall: card.card_images[0].image_url_small
    }
    if (card.level !== undefined) {
      newCard = {
        ...newCard,
        level: card.level,
        atk: card.atk,
        def: card.def
      }
    }
    addCardFunction({
      deckId: deck.id,
      card: newCard
    })
      .then(_ => {
        showSuccess(`Successfully add ${card.name} to ${deck.name}`)
      })
      .catch(err => {
        console.log(JSON.stringify(err), err, err.message)
        let message = err.message || "Error while adding data"
        if(message === "INTERNAL"){
          message = "Something error, please try again."
        }
        showError(message)
      })
      .finally(_ => {
        setAddLoading(false)
      })
  } else {
    showError("You haven't selected any deck")
  }
}