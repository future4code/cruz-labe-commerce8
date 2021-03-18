import React from 'react';
import { Carrinho } from './components/Carrinho/Carrinho';
import styled from 'styled-components';
import ProdutosCard from './components/produtos/ProdutosCard';
import Filtros from './components/produtos/Filtros'
// const ConteinerCarrinho = styled.div``

// const Carrinho = styled.div``

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
    filtroMin: 0,
    filtroMax: 0,
    filtroNome: '',
    carrinho: [],
    produtosNoCarrinho: [
      {
        id: 3,
        name: 'Produto 3',
        preco: 30,
        quantidade: 2
      }
    ]
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

  filtraProdutos = () => {
    let produtosFiltrados = [...arrayComOsprodutos]
    
    produtosFiltrados= produtosFiltrados.filter((produto) => {
      if (produto.valor < this.state.filtroMin) {
        return false
      } return true
      
    })
    return produtosFiltrados
  }
    
    
  

  AdicionaProdutoNoCarrinho = (produtoId) => {
    const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)

    if (produtoNoCarrinho) {

      const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map(produto => {

        if (produtoId === produto.id) {

          return {
            ...produto, quantidade: produto.quantidade + 1
          }
        }

        return produto
      })

      this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})

    } else {

      const produtoAdicionar = this.state.produtosNoCarrinho.find(produto => produtoId === produto.id)

      const novoProdutoNoCarrinho = [...this.state.produtosNoCarrinho, {...produtoAdicionar, quantidade: 1}]

      this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})
    }
  }

  RemoveProdutoDoCarrinho = (produtoId) => {
    const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map((produto) => {
      if (produto.id === produtoId) {
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
      <div className="App">
        <Centralizados>
          <Carrinho
            produtosNoCarrinho={this.state.produtosNoCarrinho}
            RemoveProdutoDoCarrinho={this.RemoveProdutoDoCarrinho}
          />
          <ProdutosCard/>
        </Centralizados>
        <Filtros
          filtroMin={this.state.filtroMin}
          filtroMax={this.state.filtroMax}
          filtroNome={this.state.onChangeNameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}

        />
      </div>
    )
  }

}

export default App
