import React, { Component } from "react";
import { MainContainer, AgreeForm } from "components";
import firebase from "firebase";
// import Firebase from "lib/firebase";
import "@firebase/firestore";
import config from "./config.json";
import { Provider } from "lib/store";

class App extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      this.state = { db: firebase.firestore() };
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        <MainContainer>
          <AgreeForm />
        </MainContainer>
      </Provider>
    );
  }
}

export default App;
