import React, { useState,useEffect } from "react"
import { Card } from 'react-bootstrap'


export default function CardImage(src){
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)
  
  function onFinishLoad(error){
    
    if(error){
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(()=>{ 
    setImgSrc(src)
    setIsLoading(true)
    setIsError(false)
  },[src])

  return [
    isLoading,
    () => (
      <Card.Img
        onLoad={() => onFinishLoad()}
        onError={() => onFinishLoad(true)}
        style={{ display : isLoading ? "none" : "block" }}
        src={imgSrc}
        alt="">
      </Card.Img>
    ),
    isError
  ]

  
  
}