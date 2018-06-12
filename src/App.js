import React, { Component } from "react";
import { MainContainer, AgreeForm, AuthPage } from "components";
import firebase from "firebase";
// import Firebase from "lib/firebase";
import "@firebase/firestore";
import config from "./config.json";
import { Provider } from "lib/store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <Router>
        <Provider value={this.state}>
          <Route
            exact
            path="/"
            component={() => (
              <MainContainer>
                <AgreeForm />
              </MainContainer>
            )}
          />
          <Route path="/auth" component={AuthPage} />
        </Provider>
      </Router>
    );
  }
}

export default App;
