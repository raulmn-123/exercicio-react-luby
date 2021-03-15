import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styleFollowersPage.css";
import {Link} from 'react-router-dom'
import {AiOutlineHome,FiGithub,IoPeopleOutline, IoMdArrowBack} from 'react-icons/all'

function FollowersPage() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const [followers, setFollowers] = useState([])

    const getFollowers = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${user.login}/followers`)
        setFollowers(res.data)
      } catch(err) {

      }
    }
    useEffect( () => {
      getFollowers()
    }, [])
  return (
    <div className="conteudo-principal">
      <header className="header-followers">
        <a className="botao-voltar" href="/user"><IoMdArrowBack/></a>
        <h2 className="qtd-seguidores">{user.followers} seguidores</h2>
      </header>
      <ul className="lista-seguidores">
        {followers.map( (follower) => {
          return (
            <li className="item-seguidor">
            <div className="avatar-seguidor">
              <img src={follower.avatar_url}></img>
            </div>
            <div className="nome-seguidor">
              <h3>#{follower.login}</h3>
              
            </div>
            
            <Link to={
              {
                pathname:`/follower/${follower.login}`
              }
            } >Ver perfil</Link>
          </li>
          )
        })}

      </ul>
      <nav className="barra-navegação">
      <Link to="/"><AiOutlineHome/>Home</Link>
        <Link to="/repos"><FiGithub/>Repos</Link>
        <Link to="/followers"><IoPeopleOutline/>Seguidores</Link>
        <Link to="/following"><IoPeopleOutline/>Seguindo</Link>
      </nav>
    </div>
  );
}

export default FollowersPage;
