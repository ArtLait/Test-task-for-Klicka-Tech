import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from '@material-ui/core/Grid'
import PlaylistContainer from './containers/PlaylistContainer'
import Filter from './containers/Filter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Grid container>
          <PlaylistContainer />
          <Filter /> 
        </Grid> 
      </div>
    );
  }
}

export default App;

