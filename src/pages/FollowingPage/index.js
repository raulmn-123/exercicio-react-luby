import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styleFollowingPage.css";
import {Link} from 'react-router-dom'
import {AiOutlineHome,FiGithub,IoPeopleOutline, IoMdArrowBack} from 'react-icons/all'

function FollowingPage() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const [followings, setFollowings] = useState([])

    const getFollowings = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${user.login}/following`)
        setFollowings(res.data)
      } catch(err) {

      }
    }
    useEffect( () => {
      getFollowings()
    }, [])
  return (
    <div className="conteudo-principal">
      <header className="header-following">
        <a className="botao-voltar" href="/user"><IoMdArrowBack/></a>
        <h2 className="qtd-seguidores">{user.following} seguindo</h2>
      </header>
      <ul className="lista-seguidores">
        {followings.map( (following) => {
          return (
            <li className="item-seguidor">
            <div className="avatar-seguidor">
              <img src={following.avatar_url}></img>
            </div>
            <div className="nome-seguidor">
              <h3>{following.login}</h3>
              
            </div>
            
            <a href={`https://github.com/${following.login}`} >Ver perfil</a>
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

export default FollowingPage;
