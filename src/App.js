import React, { Component } from "react";
import { MainContainer, AgreeForm, AuthPage } from "components";
import firebase from "firebase";
// import Firebase from "lib/firebase";
import "@firebase/firestore";
import config from "./config.json";
import { Provider } from "lib/store";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      this.state = {
        db: firebase.firestore(),
        auth: false,
        setAuth: auth => this.setState({ auth })
      };
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        <Router>
          <MainContainer>
            <Route exact path="/" component={() => <AgreeForm />} />
            <Route
              path="/auth"
              render={() =>
                this.state.auth ? <AuthPage /> : <Redirect to="/" />
              }
            />
          </MainContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;
