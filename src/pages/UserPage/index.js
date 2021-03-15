import "./styleUserPage.css";
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import {AiOutlineHome,FiGithub,IoPeopleOutline, IoExitOutline} from 'react-icons/all'
function UserPage() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('user'))
    setUser(u)

  }, [])

  return (
    <div className="conteudo-principal">
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      <header className="header-usuario">
        <p className="title-usuario">
          #{user.login}
        </p>
               <a className="sair" href="/" >
          <IoExitOutline/>
        </a>
      </header>
      <div className="div-logo">
        <img className="logo" src={user.avatar_url ? user.avatar_url : '' } />
        </div>
      <main>
        <div className="usuario-infos">
        <h2 className="nome-usuario">
          {user.name ? user.name : user.login}
        </h2>
        <p className="email-usuario">{user.email ? user.email : ''}</p>
        <p className="cidade-usuario">{user.location ? user.location : ''}</p>
        </div>
        <div className="info-repositorios-usuario">
          <span className="seguidores-usuario">
            <h3>{user.followers ? user.followers : '0'}</h3><p>Seguidores</p>
          </span>
          <span className="seguindo-usuario">
            <h3>{user.following ? user.following : '0'}</h3><p>Seguindo</p>
          </span>
          <span className="repos-usuario">
            <h3>{user.public_repos ? user.public_repos : '0'}</h3><p>Repositórios</p>
          </span>
        </div>
        
        <div className="bio-usuario">
        <h2 className="title-bio">BIO</h2>
        <div className="text-bio">
        {user.bio ? user.bio : ''}
        </div>
        </div>
      </main>
      <nav className="barra-navegação">
      <Link to="/"><AiOutlineHome/>Home</Link>
        <Link to="/repos"><FiGithub/>Repos</Link>
        <Link to="/followers"><IoPeopleOutline/>Seguidores</Link>
        <Link to="/following"><IoPeopleOutline/>Seguindo</Link>
      </nav>
    </div>
  )
}

export default UserPage;
