import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Redirect } from 'react-router-dom'

import uiConfig from "config/firebaseui";
import firebaseAuth from "config/firebaseAuth"
import { useRedux } from "hooks"
import { TextYugi, BackgroundVideo } from "components"

export default function Auth(){
  const { user } = useRedux()
  
  if(user.data){
    return <Redirect to="/" />
  }

  return (
    <div style={styles.authContainer}>
      <BackgroundVideo></BackgroundVideo>
      <div id="auth-content" 
      className={`d-flex flex-column justify-content-center align-items-center w-100 h-100`}
      style={styles.authContent}>
        <TextYugi
          type="fantasy"
          size="xl"
          color="white"
          glow
          style={{
            textAlign: "center",
            marginBottom : "1em"
          }}
          >Build your dream Yu-Gi-Oh deck here.</TextYugi>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth}/>
      </div>
    </div>
  )
}

const styles = {
  authContainer : {
    minHeight : "100vh",
    maxHeight : "100vh",
    width : "100%",
  },
  authContent : {
    position: "absolute",
    top: 0,
  }
}
