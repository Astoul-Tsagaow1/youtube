import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { searchVideo: "" };

  HendelInputeChange = e => {
    this.setState({ searchVideo: e.target.value });
  };
  HendelSubmit = event => {
    event.preventDefault();

    this.props.searchVideo(this.state.searchVideo);
  };
  render() {
    return (
      <div className="ui  segment search-bar">
        <form onSubmit={this.HendelSubmit} className="ui form ">
          <div className="field">
            <label>video Search : </label>
            <input onChange={this.HendelInputeChange} type="text" />
          </div>
        </form>
      </div>
    );
  }
}
