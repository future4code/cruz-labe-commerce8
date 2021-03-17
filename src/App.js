import React from 'react';
import styled from 'styled-components'
import Produtos from './components/produtos/produtos'
import ProdutosCard from './components/produtos/ProdutosCard'
import Filtros from './components/Filtros'

const Centralizados = styled.div`
  width: 1200px; 
  height: 100vh;
  margin:auto; 
  `

class App extends React.Component  {
  
    state = {
      filtroMin: 100,
      filtroMax: 1000,
      filtroNome: 'Produto',
      carrinho: []
    }
  
    onChangeMinFilter = (event) => {
      this.setState({filtroMin: event.target.value})
    }
  
    onChangeMaxFilter = (event) => {
      this.setState({filtroMax: event.target.value})
    }
  
    onChangeNameFilter = (event) => {
      this.setState({filtroNome: event.target.value})
    }

  render(){
  
  
  return (
    <div className="App">
      <Centralizados>
        <Produtos></Produtos>

      <div className = "Produtos-index">
        <ProdutosCard></ProdutosCard>

     </div>

      </Centralizados>

      <Filtros></Filtros>
  </div>
 
  );

  }
}

export default App;
