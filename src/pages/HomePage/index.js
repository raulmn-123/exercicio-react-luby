import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import "./styleHomePage.css";
import logo from './logotipo-do-github.png'
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();
  const setData = ({ userInput, error }) => {
    setUserInput(userInput);
    setError(error);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${userInput}`);
      setData(res.data);
      setError(null);
      localStorage.setItem('user', JSON.stringify(res.data))
      history.push('/user')
      
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="div">
      
      <div className="div-principal">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="logo">
            <img className="logo" src={logo} />
            </Form.Group>
            
          <Form.Group>
            <Form.Input
              placeholder="Usuário"
              name="name"
              onChange={handleSearch}
              required
            ></Form.Input>
            </Form.Group>
            <Form.Group>
            <Form.Button content="Enviar" />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
