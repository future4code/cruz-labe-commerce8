import React from 'react'
import { ItemDoCarrinho } from './ItemDoCarrinho'
import styled from 'styled-components';

const CarrinhoConteiner = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const CarrinhoLista = styled.div`
  display: grid;
  gap: 8px;
`;

const Titulo = styled.h3`

`;

export class Carrinho extends React.Component {

    getValorTotal = () => {
        let valorTotal = 0
    
        for(let produto of this.props.produtosNoCarrinho) {
          valorTotal += produto.preço * produto.quantidade
    }
    
        return valorTotal
    }

  render() {

    const imprimir = this.props.carrinho.map((item, index) => {
      //setProdutos([...produto, item]);
      return <ItemDoCarrinho item={item.name}  key={index} />
  })

    return (

      <CarrinhoConteiner>
        <Titulo>Carrinho:</Titulo>
        {imprimir}
          
      </CarrinhoConteiner>

    )

  }

}


