import React from 'react';
import { Col, Image } from 'react-bootstrap'
import { TextYugi } from 'components';

export default function TechStack() {
  return (
    <Col>
      <div 
        style={styles.black}
        className="w-100 text-center">
          <TextYugi 
            normal
            type="matrix" 
            color="white"
            style={{fontSize : "5rem"}}>
            about this app
          </TextYugi>
        <TextYugi
          normal
          size="md"
          color="white"
          type="fantasy"
          className="mt-5">
            <p data-aos="fade-down">YugiDeck is an serverless app that allows user to build unlimited deck from <strong>Japanese Yu-Gi-Oh! Trading Card Game</strong> developed by Konami. This app is using YGOPRODeck public Yu-Gi-Oh! API to access enormous Yu-Gi-Oh! card database with over 10.000 card available to view.</p>
            <p data-aos="fade-down">I created this app to have deeper understanding about React, especially React Hooks. I have learned that we can use hooks to separate stateful logic in our components to other function, make our components cleaner and also allows us to reuse that stateful logic. Hooks are not only making our functional components can have state like class component, but it’s more than that!</p>
            <p data-aos="fade-down">In this application, I also focus on studying Firebase services like Authentication, Cloud Function, Cloud Firestore, and Hosting. I have learned to writing security rules and using cloud functions to restrict and validate CRUD operation on our collections in Cloud Firestore.</p>
            <p data-aos="fade-down" style={{marginTop: "5rem"}}> Source Code on <a href="https://github.com/rubhiauliatirta/yugideck-react">Github</a> </p>
        </TextYugi>
      </div>
      <div style={styles.separator} className="w-100"></div>
      <div 
        style={styles.white}
        className="w-100 text-center">
          <TextYugi type="matrix" style={{fontSize : "5rem"}} normal>
            front end
          </TextYugi>
          <div className="w-100 d-flex justify-content-around flex-wrap">
          {
            frontend.map((item, index) => (
              <a data-aos="fade-left"  href={item.docs} key={index} className="d-flex flex-column align-items-center">
                <Image  {...item} height="150" width="auto" className="mt-5"/>
              </a>
            ))
          }
          </div>
      </div>
      <div style={styles.separator} className="w-100"></div>
      <div 
        style={styles.black}
        className="w-100 text-center">
          <TextYugi type="matrix" style={{fontSize : "5rem"}} color="white" normal>
            cloud service
          </TextYugi>
          <div className="w-100 d-flex justify-content-around flex-wrap">
          {
            cloud.map((item, index) => (
              <a data-aos="fade-up" key={index} href={item.docs} className="d-flex flex-column align-items-center">
                <Image  {...item} width="200" className="mt-5"/>
                <TextYugi color="white" size="xl">{item.alt}</TextYugi>
              </a>
            ))
          }
          </div>
      </div>
    </Col>
  );
}

const styles = {
  black : {
    backgroundColor : "black",
    padding : "5rem"
  },
  white : {
    backgroundColor : "whitesmoke",
    padding : "5rem",
  },
  separator : {
    height : ".5rem",
    backgroundColor : "white",
    zIndex : "2",
    position : "relative",
    animation: "glowBox 1s ease-in-out infinite alternate"
  },
}

const frontend = [
  {
    src : require(`assets/react.png`),
    alt : "React",
    docs : "https://reactjs.org/"
  },
  {
    src : require(`assets/react-router.png`),
    alt : "React Router",
    docs : "https://reacttraining.com/react-router/web/"
  },
  {
    src : require(`assets/react-redux.png`),
    alt: "React Redux",
    docs : "https://react-redux.js.org/"
  },
  {
    src : require(`assets/react-icons.png`),
    alt : "React Icons",
    docs : "https://react-icons.github.io/react-icons/"
  },
  {
    src : require(`assets/bootstrap.png`),
    alt : "Bootstrap",
    docs : "https://getbootstrap.com/"
  },
  {
    src : require(`assets/react-bootstrap.png`),
    alt : "React Bootstrap",
    docs : "https://react-bootstrap.github.io/"
  },
  {
    src : require(`assets/axios.png`),
    alt : "axios",
    docs : "https://github.com/axios/axios"
  },
  {
    src : require(`assets/sweetalert2.png`),
    alt : "sweetalert2",
    docs : "https://sweetalert2.github.io/"
  },
]

const cloud = [
  {
    src: require(`assets/firebase-auth.png`),
    alt : "Firebase Authentication",
    docs: "https://firebase.google.com/products/auth"
  },
  {
    src: require(`assets/firebase-function.png`),
    alt : "Firebase Cloud Functions",
    docs: "https://firebase.google.com/products/functions"
  },
  {
    src: require(`assets/firebase-firestore.png`),
    alt : "Firebase Cloud Firestore",
    docs: "https://firebase.google.com/products/firestore"
  },
  {
    src: require(`assets/firebase-hosting.png`),
    alt : "Firebase Hosting",
    docs: "https://firebase.google.com/products/hosting"
  }
]
