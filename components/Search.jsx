import React from 'react';

class Search extends React.Component {


  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
         />
        <button className="btn hidden-sm-down">
          Search
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>

    )
  }
}

export default Search;
