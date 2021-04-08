import React from 'react';
import styled from 'styled-components'

const DivContainer = styled.div`

    width: 300px;
  flex-grow: 1;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
  & .title {
      font-size: 1em;
  }`

class ShowProdutos extends React.Component  {
    
        
    
    render(){
   
    return (
        <DivContainer>
            <img src={this.props.imageUrl}></img>
            <h1 className="title">{this.props.name}</h1>
            <span>R${this.props.value},00</span>
            <button onClick={this.props.add}>Adicionar ao Carrinho</button>
            
        </DivContainer>
    )   
}
}

export default ShowProdutos;


/**/