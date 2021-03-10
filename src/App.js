import './App.css';
import React, { useState, useEffect } from 'react'
import { Form, Card, Image, Icon } from 'semantic-ui-react'

function App() {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/raulmn-123")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, []) 

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url
  }) => {
    setName(name)
    setUsername(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setError(null)
          setData(data)
        }

      })
  }

  return (
    <div>
      <div className="navbar">
        Exercício prático React!
      </div>
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder="Nome no Github" name="name" onChange={handleSearch}></Form.Input>
            <Form.Button content="Enviar" />
          </Form.Group>
        </Form>
      </div>
      { error ? (<h1>{error}</h1>) : (
              <div className="card">
              <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
                  <Card.Header>{userName}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    {followers} Followers
            </a>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    {following} Following
            </a>
                </Card.Content>
                <Card.Content extra>
                  <a href={`https://api.github.com/users/${userInput}/repos`}>
                    <Icon name='user' />
                    {repos} Repositórios
            </a>
                </Card.Content>
              </Card>
            </div>
      )}

    </div>
  );
}

export default App;
