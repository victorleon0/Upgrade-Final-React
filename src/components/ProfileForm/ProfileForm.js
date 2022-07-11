import React, { Component } from 'react';
import './ProfileForm.css'

export default class profileForm extends Component {
  state={
    name: '',
    picture: '',
    email: '',
    message: '',
    editing: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      picture: '',
      email: '',
      message: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
    <div className="flex-container">
      <div className="container">

        <h1>Add Profile</h1>

        <form onSubmit={this.handleSubmit}>
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            />
            <br />
            <br />
          <label for="picture">Picture</label>
          <input
            id="picture"
            type="text"
            placeholder="picture url"
            value={this.state.picture}
            onChange={this.handleChange}
            name="picture"
            />
            <br />
            <br />
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            />
            <br />
            <br />
          <label for="message">Message</label>
          <input
            id="message"
            type="text"
            placeholder="leave message"
            value={this.state.message}
            onChange={this.handleChange}
            name="message"
            />
            <br />
            <br />
            <button type="submit">ADD</button>
        </form>
      </div>
      <div className="title" style={{textAlign: "right", fontSize: "100px", color: "white", marginTop: "100px", marginRight: "-40px"}}>
        MANAGE<br />YOUR PROFILES
      </div>
    </div>
    )
  }
}
