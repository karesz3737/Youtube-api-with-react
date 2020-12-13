import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  handleInput = (event) => {
    this.setState({ term: event.target.value });
  };
  formSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.formSubmit}>
          <label>Video search</label>
          <div className="ui fluid action input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.tems}
              onChange={this.handleInput}
            />
            <div className="ui button">Search</div>
          </div>
        </form>
      </div>
    );
  }
}
