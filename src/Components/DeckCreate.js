import React, { Component } from 'react'
import axios from 'axios'

export default class DeckCreate extends Component {
  state = {
    title: '',    
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    axios.post(`https://localhost:44393/api/stack`,{title: this.state.title})
    .then(response => {
      console.log(response);
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Deck Name:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <button className="btn" type="submit">Create Deck</button>
        </form>
      </div>
    )
  }
}

