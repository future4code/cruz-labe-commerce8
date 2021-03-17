import React from 'react';
import styled from 'styled-components'
import Produtos from './components/Produtos/Produtos'
import ProdutosCard from './components/Produtos/ProdutosCard'
const Centralizados = styled.div`
  width: 1200px; 
  height: 100vh;
  margin:auto; 
  `

class App extends React.Component  {

  render(){
  
  
  return (
    <div className="App">
      <Centralizados>
        <Produtos></Produtos>

      <div className = "Produtos-index">
        <ProdutosCard></ProdutosCard>

     </div>

      </Centralizados>
  </div>
 
  );

  }
}

export default App;
