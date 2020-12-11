import React, {useEffect,useState} from "react";
import api from './services/api';

import "./styles.css";
import { useEffect } from "react";

function App() {

  const {repositories, setRepositories} = useState([]);

  useEffect(()=>{
      api.get('repositories').then(reponse =>{
        setRepositories(reponse.data);
      });
  },[]);
  async function handleAddRepository() {
    const response = await api.post('/repositories',{
      title:'Angular',
      url:'https://github.com/gsdo12/crudCloud',
      techs:['AngularCLI']
    })

    setRepositories([... repositories, reponse.data])
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key="repository.id">
          {repository.title}

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
