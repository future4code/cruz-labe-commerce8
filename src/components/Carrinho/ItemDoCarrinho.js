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
        return (
          <div>
            <span>1</span>
            <span>{this.props.item}</span>
            <button>Remover</button>
          </div>
        )
    }

}



