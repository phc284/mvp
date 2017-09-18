import React from 'react';
import Search from './Search.jsx';
import PlayerView from './PlayerView.jsx';
import Login from './login.jsx'
import * as TeamsModel from '../models/teamModel.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      loggedIn: false
    }

    this.getTeams = this.getTeams.bind(this);
  }

  componentDidMount() {
    this.getTeams();
  }

  getTeams() {
    TeamsModel.getTeams((teams) => {
      this.setState({
        teams: teams
      })
    })

  }


  render() {
    return (
      this.state.loggedIn ?
      <div>
        <div>
          <nav className="navbar">
            <Search />
          </nav>
        </div>
        <div>
          <TeamView teams/>
        </div>
      </div>
      :
      <Login />

    );
  }
}

export default App;
