import React from 'react';
import { Carrinho } from './components/Carrinho/Carrinho';
import styled from 'styled-components';

// const ConteinerCarrinho = styled.div``

// const Carrinho = styled.div``

const produtos = [
  {
    id: 3,
    name: 'Produto 3',
    preço: 30,
  },

  {
    id: 1,
    name: 'Produto 1',
    preço: 30,
  }

]

class App extends React.Component {

  state = {
    produtosNoCarrinho: [
      {
        id: 3,
        name: 'Produto 3',
        preço: 30,
        quantidade: 2
      }
    ]
  }


  AdicionaProdutoNoCarrinho = (produtoId) => {
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)

    if(produtoNoCarrinho) {

      const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map(produto => {

        if(produtoId === produto.id) {
          
          return {
            ...produto, quantidade: produto.quantidade + 1
          }
        }
        
        return produto
      })

      this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})
      
    } else {

      const produtoAdicionar =  this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)

      const novoProdutoNoCarrinho = [...this.state.produtosNoCarrinho, {...produtoAdicionar, quantidade: 1}]

      this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})

    }
  }


  RemoveProdutoDoCarrinho = (produtoId) => {
  const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {
    if(produto.id === produtoId) {
      return {
        ...produto,
        quantidade: produto.quantidade - 1
      }
    }
    return produto
  }).filter((produto) => produto.quantidade > 0)

  this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})
}

  render() {
    return (

      <Carrinho

      produtosNoCarrinho={this.state.produtosNoCarrinho}
      RemoveProdutoDoCarrinho={this.RemoveProdutoDoCarrinho}

      />
    )
  }
}

export default App;

