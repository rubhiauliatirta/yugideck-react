import React from 'react';
import { Image } from "react-bootstrap";

let levelImage = require('assets/level.png')

export default function Level({ level }) {

  return (
    <>
      {
        [...Array(level).keys()].map((_, index) => (
          <Image
            key={index}
            src={levelImage} 
            roundedCircle
            style={{ width: "20px", height: "20px", marginRight: "4px" }}
          />
        ))
      }
    </>
  );
}
