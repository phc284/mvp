import React from 'react';
import Search from './Search.jsx';
import PlayerView from './PlayerView.jsx'

class App extends React.Component {


  render() {
    return (
      <div>
        <div>
          <nav className="navbar">
            <Search />
          </nav>
        </div>
        <div>
          <PlayerView />
        </div>
      </div>
    );
  }
}

export default App;
