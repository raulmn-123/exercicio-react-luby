import React, {useState, useEffect} from 'react'
import './style.css'
import logo from './logotipo-do-github.png'
import axios from 'axios'
import {useParams} from 'react-router-dom'
function FollowerPage(){

    const {login} = useParams()
    

    const [follower, setFollower] = useState([])

    const getFollower = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${login}`)
        setFollower(res.data)
      } catch(err){

      }
    }

    useEffect( () => {
      getFollower()
    }, [])


    return (
        <div className="conteudo-principal">
      <header className="header-usuario">
        <p className="title-usuario">
        {follower.login}
        </p>
               <a className="sair">
          Salvar
        </a>
      </header>
      <div className="div-logo">
        <img className="logo" src={follower.avatar_url} />
        </div>
      <main>
        <div class="usuario-infos">
        <h2 className="nome-usuario">
          {follower.login ? follower.login : ''}
        </h2>
        <p className="email-usuario">{follower.email ? follower.email : ''}</p>
        <p className="cidade-usuario">{follower.location ? follower.location : ''}</p>
        </div>
        <div className="info-repositorios-usuario">
          <span className="seguidores-usuario">
            <h3>{follower.followers ? follower.followers : ''}</h3><p>Seguidores</p>
          </span>
          <span className="seguindo-usuario">
            <h3>{follower.following ? follower.following : ''}</h3><p>Seguindo</p>
          </span>
          <span class="repos-usuario">
            <h3>{follower.public_repos ? follower.public_repos : ''}</h3><p>Repositórios</p>
          </span>
        </div>
        
        <div>
        <h2 className="title-bio">BIO</h2>
        </div>
        <section className="bio-usuario">   
        {follower.bio ? follower.bio : ''}
        </section>
      </main>
      <nav className="barra-navegação">
        <a>Home</a>
        <a>Repos</a>
        <a>Seguidores</a>
        <a>Seguindo</a>
      </nav>
    </div>
    )
}

export default FollowerPage;