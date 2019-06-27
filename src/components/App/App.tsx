import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

import AddContact from "../AddContact";
import ContactList from "../ContactList";
import EditContact from "../EditContact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact List App...</h1>
          <Switch>
            <Route exact path="/" component={ContactList} />
            <Route exact path="/contacts" component={ContactList} />
            <Route exact path="/contacts/new" component={AddContact} />
            <Route exact path="/contacts/:id/edit" component={EditContact} />
          </Switch>
        </header>
      </div>
    )
  }
}

export default App;
