import React from 'react';
import { Carrinho } from './components/Carrinho/Carrinho';
import styled from 'styled-components';
import ProdutosCard from './components/produtos/ProdutosCard';
import Filtros from './components/produtos/Filtros'


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

class App extends React.Component {

  state={
    carrinho: [],
    filtroMin: 0,
    filtroMax: 0,
    filtroNome: '',
  
    produtos :[{
      id: 1,
      name: "Brinquedo 1",
      value: 10,
      imageUrl: "https://picsum.photos/200/200",
  },
  {
      id: 2,
      name: "Brinquedo 2",
      value: 50,
      imageUrl: "https://picsum.photos/200/201",
  },
  {
      id: 3,
      name: "Brinquedo 3",
      value: 300,
      imageUrl: "https://picsum.photos/200/203",
  },
  {
      id: 4,
      name: "Brinquedo 4",
      value: 450,
      imageUrl: "https://picsum.photos/200/204",
  },
  {
      id: 5,
      name: "Brinquedo 5",
      value: 1000,
      imageUrl: "https://picsum.photos/200/205",
  },
  {
      id: 6,
      name: "Brinquedo 6",
      value: 790,
      imageUrl: "https://picsum.photos/200/206",
  }
   
  ]
    
  }

  onChangeMinFilter = (event) => {
    this.setState({filtroMin: Number(event.target.value)})
    console.log(event.target.value)
  }

  onChangeMaxFilter = (event) => {
    this.setState({filtroMax: Number(event.target.value)})
  }

  onChangeNameFilter = (event) => {
    this.setState({filtroNome: event.target.value})
  }

  
  
  AdicionaProdutoNoCarrinho = (produto) => {
    this.setState({
      carrinho: [...this.state.carrinho, produto]
    })

    console.log(this.state.carrinho)
  }

 

  RemoveProdutoDoCarrinho = (produtoId) => {
    
  }

  render() {

     // Filtro dos valores minimo, máximo e do nome
     //let listaFiltrada = this.state.Filtroprodutos.filter((produtos) => {
      //if(produtos.valor >= this.state.valorMinimo && produtos.valor <= this.state.valorMaximo) {
       // if(produtos.nome.includes(this.state.nomeProduto)) {
         // return true;
       // }
     // }
     /// return false
   // })


    return (
      <div className="App">
        <Centralizados>
          <Carrinho
            carrinho={this.state.carrinho}/>
            <Filtros 
            onChangeMinFilter={this.onChangeMinFilter}
            onChangeMaxFilter={this.onChangeMaxFilter}
            onChangeNameFilter={this.onChangeNameFilter}
            filtroMin={this.state.filtroMin}
            filtroMax={this.state.filtroMax}
            filtroNome={this.state.filtroNome}
            />
          <ProdutosCard
            add={this.AdicionaProdutoNoCarrinho}
            produtos={this.state.produtos}
            filtroMin={this.state.filtroMin}
            filtroMax={this.state.filtroMax}
            filtroNome={this.state.filtroNome}
          />
          
        </Centralizados>
        
      </div>
    )
  }

}

export default App
