import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RequestForm from "./components/RequestForm";

class App extends Component {
  state = {
    phone: "905-test-phone"
  }

  componentDidMount() {
    console.log(this.state.phone);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bet With Friends</h2>
        </div>
        <p className="App-intro">
          To get started, Enter In the Following Information.
        </p>
        <RequestForm/>
      </div>
    );
  }
}

export default App;
