import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Spinner } from 'react-bootstrap'

import useRedux from 'hooks/useRedux'
import CardList from 'components/CardList'
import { fetchCard } from "store/actions"

export default function Explore(){
  const { yugioh, dispatch } =  useRedux()

  const loadMore = () => {
    if(!yugioh.isLoading){
      dispatch(fetchCard())
    }
  }

  const loader = (
      <div className="d-flex flex-column align-items-center" key={0}>
        <Spinner style={{color : "gold"}} animation="border" />
        <p className="text-white"> Loading cards....</p>
      </div>
    )
 
  return (
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={!!yugioh.url}
        loader={yugioh.isLoading && loader}
        className="justify-content-center w-100"
        >
          <CardList cards={yugioh.cards}/> 
      </InfiniteScroll>
  )
}