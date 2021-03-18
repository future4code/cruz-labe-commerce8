import React from 'react';
import styled from 'styled-components'
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
       
    
        <ProdutosCard></ProdutosCard>
       
       
        </Centralizados>
     </div>

     

 
  );

  }
}

export default App;
