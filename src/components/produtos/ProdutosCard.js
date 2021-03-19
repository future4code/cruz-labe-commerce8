import React from 'react';
import styled from 'styled-components'
import ShowProdutos from '../ShowProdutos';

const DivContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    
`


const HeaderProdutos = styled.div`
  display: flex;
  flex-direction:row;
  background-color:lightsalmon;
  justify-content: space-between;
  align-items:center;
  height:100px;
  padding: 0px 180px;
  box-sizing:border-box;
  `

const ProdutosImg = styled.img`
  width: 150px;
  height: 150px;
  box-sizing:border-box;
  
`
const ProdutoIndex = styled.div`
 background-color:lightsalmon;
  width:300px;
  text-align:center;
  padding:8px;
  box-sizing:border-box;
  height:250px;
`
const ProdutosFlex = styled.div`
  padding:10px;
  background-color:red;
  height:280px;
  box-sizing:border-box;
   
`

class ProdutosCard extends React.Component  {
    

    filtraProdutos = () => {
      let produtosFiltrado = [...this.props.produtos]
      
      if (this.props.filtroMin) {
        
        produtosFiltrado = produtosFiltrado.filter((produto) =>{
          return produto.value >= this.props.filtroMin
        })
      }

      if (this.props.filtroMax) {
        produtosFiltrado = produtosFiltrado.filter((produto) =>{
          return produto.value < this.props.filtroMax
      })
    }
    
      if (this.props.filtroNome) {
        produtosFiltrado = produtosFiltrado.filter((produto) =>{
          return produto.name.toLowerCase().indexOf(this.props.filtroNome) > -1
      })
    }

      return produtosFiltrado
      
    }



    listaProdutos = () => {
      const produtosFiltrados = this.filtraProdutos()
      
      return produtosFiltrados.map((produto) => {
        return <ShowProdutos add={()=>this.props.add(produto)} name={produto.name} value={produto.value} imageUrl={produto.imageUrl} key={produto.id}/>
    })

    }

    

    render(){
   

    return (
        <DivContainer>
          {this.listaProdutos()}  
        </DivContainer>
    )   
}
}

export default ProdutosCard;
