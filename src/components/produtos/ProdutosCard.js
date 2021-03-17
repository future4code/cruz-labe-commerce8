import React from 'react';
import styled from 'styled-components'
import App from '../../App'
import Produtos from './Produtos';

const ProdutosPost = styled.div `
  
  background-color:lightgrey;
 border:solid 2px;
  height:100vh;
  padding:15px;
  box-sizing:border-box;
 
   
`
const ProdutosImg = styled.img`
  border-radius:25px black;
  width: 250px;
  height: 250px;
  box-sizing:border-box;
  
`

const ProdutoIndex = styled.div`
 background-color:lightsalmon;
 

  width:400px;
  text-align:center;
  padding:15px;
  margin-left:20px;
  box-sizing:border-box;

`
const ProdutosFlex = styled.div`
  border-radius:25px black;

  display:flex;
  padding:15px;
  text-align:center;
  justify-content:center;
  box-sizing:border-box;
  
  
`

class ProdutosCard extends React.Component  {

    render(){
    
    
    return (
             
  <ProdutosPost>
    <ProdutosFlex>
      <ProdutoIndex>
          <div className = "Produto-1">
            <ProdutosImg src = "https://media.istockphoto.com/photos/car-toy-colorful-watercolor-style-crash-accident-isolated-on-white-picture-id906812576?s=612x612"></ProdutosImg> 
          </div>
            
            <p>Produto 1</p>
            <p> 10R$</p>
            <button>Adicionar ao carrinho</button>
      </ProdutoIndex>

      <ProdutoIndex>
        <div className = "Produto-1">
          <ProdutosImg src = "https://cdn.pixabay.com/photo/2016/09/10/15/45/marbles-1659398_960_720.jpg"></ProdutosImg> 
          </div>
       
        <p>Produto 2</p>
        <p> 15R$</p>
        <button>Adicionar ao carrinho</button>
        </ProdutoIndex>

    </ProdutosFlex>
        
    <ProdutosFlex>
      <ProdutoIndex>
        <div className = "Produto-1">
           <ProdutosImg src = "https://cdn.pixabay.com/photo/2015/03/26/10/34/tricycle-691587_960_720.jpg"></ProdutosImg> 
          </div>
       
        <p>Produto 3</p>
        <p> 20R$</p>
        <button>Adicionar ao carrinho</button>
      </ProdutoIndex>

      <ProdutoIndex>
        <div className = "Produto-1">
           <ProdutosImg src = "https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212_960_720.jpg"></ProdutosImg> 
        </div>
       
        <p>Produto 4</p>
        <p> 25R$</p>
       
        <button>Adicionar ao carrinho</button>
      </ProdutoIndex>
    </ProdutosFlex>
               
  </ProdutosPost>
       
       
       
    
        );

}
}

export default ProdutosCard;
