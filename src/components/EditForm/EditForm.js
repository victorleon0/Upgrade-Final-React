import React, { Component } from 'react'

export default class EditComponent extends Component {
  state = {
    id: this.props.profile.id
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      picture: '',
      email: '',
      messgae: ''
    })
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name || ''}
            onChange={this.handleChange}
            name="name"
            />
            <br />
            <br />
          <input
            type="text"
            placeholder="pictureUrl"
            value={this.state.picture || ''}
            onChange={this.handleChange}
            name="picture"
            />
            <br />
            <br />
          <input
            type="text"
            placeholder="email"
            value={this.state.email || ''}
            onChange={this.handleChange}
            name="email"
            />
            <br />
            <br />
          <input
            type="message"
            placeholder="leave message"
            value={this.state.message || ''}
            onChange={this.handleChange}
            name="message"
            />
            <br />
            <br />
            <button>UPDATE</button>
        </form>
      </div>
    )
  }
}
