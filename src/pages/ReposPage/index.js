import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styleReposPage.css";
import {Link} from 'react-router-dom'

function ReposPage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [repos, setRepos] = useState([]);

  const getRepos = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${user.login}/repos`
      );
      setRepos(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="conteudo-principal" style={{height: repos.length * 110}}>
      <header className="header-repos">
        <a className="botao-voltar" href="/user">Voltar</a>
        <h2 className="qtd-repos">{user.public_repos} repositórios</h2>
      </header>
      <ul className="lista-repos" >
        {repos.map((repo) => {
          return (
            <li className="item-repositorio">
              <a href={repo.svn_url}><h3 className="repo-name">{repo.name}</h3></a>
              <div className="descricao-repositorio">
                {repo.description}
              </div>
              <div className="qtd-estrelas">{repo.stargazers_count} estrelas</div>
            </li>
          );
        })}
      </ul>
      <nav className="barra-navegação">
      <Link to="/">Home</Link>
        <Link to="/repos">Repos</Link>
        <Link to="/followers">Seguidores</Link>
        <Link to="/following">Seguindo</Link>
      </nav>
    </div>
  );
}
export default ReposPage;
