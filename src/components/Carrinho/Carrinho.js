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

    return (

      <CarrinhoConteiner>
        <Titulo>Carrinho:</Titulo>
        <CarrinhoLista>
            {this.props.produtosNoCarrinho.map((produto) => {
                return (
                <ItemDoCarrinho
                cartItem={produto} 
                RemoveProdutoDoCarrinho={this.props.RemoveProdutoDoCarrinho}
                />)
        })}
            </CarrinhoLista>
        <p>Valor total: R${this.getValorTotal()},00</p>    
      </CarrinhoConteiner>

    )

  }

}


