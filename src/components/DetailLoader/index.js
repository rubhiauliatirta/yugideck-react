import React from 'react'
import ContentLoader from "react-content-loader";
import { Col } from "react-bootstrap"

export const DetailTitleLoader = () => {

  return (
    <ContentLoader
      height={30}
      backgroundOpacity="0"
      foregroundColor={"goldenrod"}
      foregroundOpacity="0.3"
      gradientRatio="1">
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  )
}

export const DetailContentLoader = () => {
  return (
    <>
      <ContentLoader
        backgroundColor="#262626"
        foregroundColor="#000"
        width={180}
        height={261}>
        <rect x="0" y="0" width="100%" height="100%" />
      </ContentLoader>

      <Col>
        <ContentLoader
          backgroundColor="#262626"
          foregroundColor="#000"
          width="100%"
          height={261}>
          <rect x="0" y="0" width="100" height="20" />
          <rect x="110" y="0" width="100%" height="20" />
          <rect x="0" y="30" width="100" height="20" />
          <rect x="110" y="30" width="100%" height="20" />
          <rect x="0" y="60" width="100" height="20" />
          <rect x="110" y="60" width="100%" height="20" />
          <rect x="0" y="90" width="100" height="20" />
          <rect x="110" y="90" width="100%" height="120" />
        </ContentLoader>
      </Col>
    </>
  )
}

export const MyCardsLoader = () => {
  return (
    <ContentLoader
      width="100%">
        {
          [...Array(3).keys()].map((rowIndex) => (
            [...Array(10).keys()].map((colIndex) => (
              <rect key={`${rowIndex}${colIndex}`} x={colIndex*60} y={rowIndex*88} width="60" height="88" />
            ))
          ))
        }
  </ContentLoader>
  )
}

