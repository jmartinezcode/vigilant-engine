import React, { Component } from 'react'
import axios from 'axios'

export default class Deck extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get(`https://localhost:44393/api/collection`)
    .then(response => {
      console.log(response);
      this.setState( {cards: response.data});
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.cards.map(card => <div className="card" key={card.id}>{card.title}</div>)}
        </div>          
      </div>
    )
  }
}

