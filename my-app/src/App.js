import React from 'react';
import AddElement from './components/AddElement/addElement';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
       <Header/>

      <main>
          <AddElement/>

          <div id="myList">
              <h3>Minha lista</h3>
              <input id="search" type="text"/>
              <button id="searchBtn">Buscar</button>


              <label for="ordenaçao">Ordenar por:
                      <select name="select">
                              <option value="nome">Nome</option> 
                              <option value="Data" selected>Data</option>
                              
                      </select>
              </label>
          

              <ul>
                  <li>DBZ <a href="">Acessar</a> </li>
                  <li>CDZ <a href="">Acessar</a> </li>
                  <li>Pokemon <a href="">Acessar</a> </li>
                  <li>Digimon <a href="">Acessar</a> </li>
              </ul>

          </div>

          

      </main>
    </div>
  );
}

export default App;
