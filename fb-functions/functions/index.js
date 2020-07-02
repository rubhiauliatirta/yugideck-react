const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp();

let cachedDeck = {}

exports.addCard = functions.https.onCall(async (data, context) => {

  if(!context.auth){
    throw new functions.https.HttpsError("unauthenticated", "You are not authenticated, please re-login")
  }

  const {deckId, card} = data
  const uid = context.auth.uid
  const cardsReference = admin.firestore().collection(`users/${uid}/decks/${deckId}/cards`)

  let cards = cachedDeck[deckId]

  let isCached = true
  if(!cards){
    let decks = await cardsReference.get()
    cachedDeck[deckId] = decks.docs.map(doc =>  doc.data())
    if(decks.size >= 60){
      throw new functions.https.HttpsError("failed-precondition", `Your deck already full`)
    }

  }

  if(isCached && cards.length >= 60){
    throw new functions.https.HttpsError("failed-precondition", "Your deck already full")
  }

  let cardsInDeck = cards.filter(c => card.name === c.name)

  if(cardsInDeck.length >= 3){
    throw new functions.https.HttpsError("failed-precondition", `You can only have 3 ${card.name} in your deck`)
  }

  return cardsReference.add(card)
  .then(docRef => {
    cachedDeck[deckId].push({id : docRef.id, ...card})
  })

})
