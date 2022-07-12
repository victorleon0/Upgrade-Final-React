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
          <label for="title">Titulo</label>
          <input
            id="title"
            type="text"
            placeholder="Título de la ewxperiencia"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
            />
            <br />
            <br />
          <label for="image">Picture</label>
          <input
            id="image"
            type="text"
            placeholder="Introduce la URL de la image"
            value={this.state.image}
            onChange={this.handleChange}
            name="image"
            />
            <br />
            <br />
          <label for="subtitle">Subtitulo</label>
          <input
            id="subtitle"
            type="text"
            placeholder="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}
            name="subtitle"
            />
            <br />
            <br />
          <label for="price">Precio</label>
          <input
            id="price"
            type="text"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleChange}
            name="price"
            />
            <br />
            <br />
            <button>UPDATE</button>
        </form>
      </div>
    )
  }
}
