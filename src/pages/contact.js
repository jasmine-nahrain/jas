import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import Menu from '../components/Menu.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Socials from '../components/Socials.js'

const Body = styled.body`
  margin: 5%;
  padding: 5%;
  background-color: rgb(230,230,230);
`;


const Title = styled.h1`
    font-size: 15vh;
    color: rgba(255,255,255,0.9);
    text-align: center;
    vertical-align: center;
    padding: 15% 0;
`;

const TextBlock = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const Next = styled.a`
  text-align: baseline;
  float: right;
  color: black;
  margin-top: -30px;
  margin-right: -4%;
`;
const Prev = styled.a`
  text-align: baseline;
  float: left;
  color: black;
  margin-left: 4%;
  margin-top: 1.5%;
  /* position: absolute; */
`;

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.setState({
      name: '',
      subject: '',
      content: '',
    })

  }
  onSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <BrowserRouter>
      <Menu/>
      <Body>
      <form>
        <div class="form-group">
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" aria-describedby="emailHelp"  />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Subject" id="exampleInputPassword1" />
        </div>
        <div class="form-group">
          <textarea type="textarea" class="form-control" placeholder="Content" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-outline-dark" style={{width: '100%'}}>Submit</button>
      </form>
      </Body>

      <Socials/>
      <div style={{width: '100%', height: '10vh'}}>
        <Prev href='/project'><strong>🡄🡄🡄</strong></Prev>
      </div>
      </BrowserRouter>
    );
  }
}
