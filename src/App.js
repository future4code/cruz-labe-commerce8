import React from 'react';
import styled from 'styled-components'
import ProdutosCard from './components/Produtos/ProdutosCard'
import Filtros from './components/Filtros'


const Centralizados = styled.div`
  width: 1200px; 
  height: 100vh;
  margin:auto; 
  `
const ProdutosImg = styled.img`
border-radius:25px black;
width: 250px;
height: 250px;
box-sizing:border-box;

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
       
      
        <ProdutosCard></ProdutosCard>
       
       
        </Centralizados>



     


    

      <Filtros></Filtros>
</div>

 
  );

  }
}

export default App;
