import React from 'react'
import styled from 'styled-components';

const ItemCarrinho = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 4px;

  p {margin: 0;}
`

export class ItemDoCarrinho extends React.Component {

    render() {
        return <ItemCarrinho>
            <p>{this.props.cartItem.quantidade}x</p>
            <p>{this.props.cartItem.name}</p>
            <button 
        onClick={() => this.props.RemoveProdutoDoCarrinho(this.props.cartItem.id)}
      >
        Remover
      </button>
        </ItemCarrinho>
    }

}



