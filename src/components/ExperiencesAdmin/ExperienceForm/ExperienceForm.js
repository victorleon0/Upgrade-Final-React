import React, { Component } from "react";
import "./ExperienceForm.scss";

export default class profileForm extends Component {
  state = {
    name: "",
    picture: "",
    email: "",
    message: "",
    editing: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      picture: "",
      email: "",
      message: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="flex-container">
        <div className="container">
          <h1>Add Excursion</h1>

          <form onSubmit={this.handleSubmit}>
            <label for="title">Titulo</label>
            <input
              id="title"
              type="text"
              placeholder="Título de la experiencia"
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
            <button type="submit">ADD</button>
          </form>
        </div>
        <div
          className="title"
          style={{ textAlign: "right", fontSize: "100px", color: "white", marginTop: "100px", marginRight: "-40px" }}
        >
          MANAGE
          <br />
          YOUR PROFILES
        </div>
      </div>
    );
  }
}
