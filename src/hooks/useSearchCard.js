import { useState } from 'react'
import axios from 'axios'

import axiosError from "helpers/axiosError"
import { showSuccess } from "config/swal"

export default function useSearchCard(){
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  const search = (query) => {
    setLoading(true)
    axios({
      url : `https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=${query}&num=50&offset=0&sort=new`,
      method : "get"
    })
    .then(({data}) => {
      setResult(data.data)
      if(data.meta.next_page){
        showSuccess("Showing top 50 results")
      } else {
        showSuccess(`Showing ${data.data.length} results`)
      }
    })
    .catch(err => {
      axiosError(err)
    })
    .finally( _=> {
      setLoading(false)
    })
  }

  return {
    result,
    loading,
    search
  }
}