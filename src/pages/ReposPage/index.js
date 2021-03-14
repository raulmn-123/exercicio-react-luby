import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

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
    <div className="conteudo-principal">
      <header>
        <a className="botao-voltar">Voltar</a>
        <h2>{user.public_repos} repositórios</h2>
      </header>
      <ul className="lista-repos">
        {repos.map((repo) => {
          return (
            <li className="item-repositorio">
              <a href={repo.svn_url}><h3>{repo.name}</h3></a>
              <div className="descricao-repositorio">
                {repo.description}
              </div>
              <div className="qtd-estrelas">{repo.stargazers_count}estrelas</div>
            </li>
          );
        })}
      </ul>
      <nav className="barra-navegação">
        <a>Home</a>
        <a>Repos</a>
        <a>Seguidores</a>
        <a>Seguindo</a>
      </nav>
    </div>
  );
}
export default ReposPage;
