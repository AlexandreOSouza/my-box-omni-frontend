import React, { Component } from 'react';
import api from "../../services/api.js";
import logo from "../../assets/logo.svg";
import "./styles.css";

export default class main extends Component {

  // contem todas as informações que o conponente tem
  // sempre o state for alterado o render é chamado
  state = {
    newBox:'',
  };

  handleSubmit = async e => {
    e.preventDefault();

    // Fazendo uma chamada na API para criar uma nova Box
    // passando o title no corpo da requisição
    const response = await api.post('boxes', {
      title: this.state.newBox,
    });

    this.props.history.push(`/box/${response.data._id}`);

  };

  handleInputChange = e => {
    this.setState({ newBox: e.target.value });
  }

  render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit}>
                <img src={logo} alt="" />
                <input 
                  placeholder="Criar um box"
                  value={this.state.newBox}
                  onChange={this.handleInputChange}/>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
  }
}
