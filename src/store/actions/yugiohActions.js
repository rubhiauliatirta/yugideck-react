import { ADD_YUGIOH_CARDS, SET_YUGIOH_LOADING, SET_DETAIL_ID } from "./keys";
import axiosError from "helpers/axiosError"
import axios from 'axios'

export function fetchCard(){
  return (dispatch, getState) => {

    const { yugioh } = getState()
    const { url } = yugioh
    console.log(url, "url")
    if(url){
      dispatch({
        type : SET_YUGIOH_LOADING,
        payload : true
      })
      axios({
        url,
        method : "get",
      })
      .then(({ data }) => {
        dispatch({
          type : ADD_YUGIOH_CARDS,
          cards : data.data,
          url : data.meta.next_page
        })
      })
      .catch(err => { 
        console.log(err)

        axiosError(err)
      })
      .finally(_=> {
        dispatch({
          type : SET_YUGIOH_LOADING,
          payload : false
        })
      })
    }
  }
}

export function setDetailId(id){
  return {
    type : SET_DETAIL_ID,
    payload : id
  }
}




