import { useState, useEffect } from 'react'
import db from "config/firestore"

export default function useFirestore(collectionPath, getData, order){
  
  let collection = collectionPath ? db.collection(collectionPath) : undefined
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const get = () => {
    
   if(collection){
      let getCollection = order ? collection.orderBy(order) : collection

      getCollection
       .onSnapshot(function (querySnapshot) {
         let temporaryData = []
         querySnapshot.forEach(doc => {
           temporaryData.push({ id: doc.id, ...doc.data() })
         })
         setData(temporaryData)
         setLoading(false)
       })
   }

  }


  const add = (newData, id) => {
    if(id){
      return collection.doc(id).set(newData)

    } else {
      return collection.add(newData)
    }

  }
  const remove = (id) => {
    return collection.doc(id).delete()

  }

  useEffect(() => {
    if (getData) {
      get()
    }
    // eslint-disable-next-line
  }, [])


  return { data, loading, add, remove, get }
}

