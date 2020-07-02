import React from 'react'
import moduleStyle from "./style.module.css"

export default function BackgroundVideo() {
  return (
    <>
      <video 
        muted
        loop="loop"
        autoPlay="autoplay" 
        style={styles.video} 
        className={moduleStyle.videoSize} >
        <source 
          type="video/mp4"
          src={require("assets/background.mp4")} />
        Your browser does not support the video tag.
      </video>
      <div 
        style={styles.mask}
        className={moduleStyle.videoSize} ></div>
    </>
  )
}

const styles = {
  video: {
    display: "block",
    background: "#000",
    border: "none",
    objectFit: "cover",
  },
  mask: {
    position: "absolute",
    top: 0,
    backgroundColor: "black",
    opacity: 0.9
  }
}