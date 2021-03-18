import React from 'react';
import styled from 'styled-components'
import App from '../..App'

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
    state = {
        ordenacao: ""
    }

    ordem = (event) => {
        this.setState({ordenacao:event.target.value})
       
    }
   
      arrayComOsprodutos =  [{
              nome: "Produto 3", 
              valor:20+"R$",
              imagem:"https://media.istockphoto.com/photos/car-toy-colorful-watercolor-style-crash-accident-isolated-on-white-picture-id906812576?s=612x612",
              botao: <button>Adicionar ao carrinho</button>
            },
            {
              nome: "Produto 2", 
              valor:15+"R$",
              imagem:"https://cdn.pixabay.com/photo/2016/09/10/15/45/marbles-1659398_960_720.jpg",
              botao: <button>Adicionar ao carrinho</button>
            },
            {
              nome: "Produto 1", 
              valor:10+"R$",
              imagem:"https://cdn.pixabay.com/photo/2015/03/26/10/34/tricycle-691587_960_720.jpg",
              botao: <button>Adicionar ao carrinho</button>
            },
           
          ]
   
     
       arrayInverso = [{
        
          nome: "Produto 1", 
          valor:10+"R$",
          imagem:"https://cdn.pixabay.com/photo/2015/03/26/10/34/tricycle-691587_960_720.jpg",
          botao: <button>Adicionar ao carrinho</button>
        },
       
        {
          nome: "Produto 2", 
          valor:15+"R$",
          imagem:"https://cdn.pixabay.com/photo/2016/09/10/15/45/marbles-1659398_960_720.jpg",
          botao: <button>Adicionar ao carrinho</button>
        },
       
       
       
       {
        nome: "Produto 3", 
        valor:20+"R$",
        imagem:"https://media.istockphoto.com/photos/car-toy-colorful-watercolor-style-crash-accident-isolated-on-white-picture-id906812576?s=612x612",
        botao: <button>Adicionar ao carrinho</button>
      },
         
    ]
     
    render(){
   
 console.log(this.arrayInverso)
        let produtoInverso
        let produto 
       
        const renderizarTelaCorreta = () => {
        
      if (this.state.ordenacao === "crescente") {
       produto = this.arrayComOsprodutos.map((index)=>{

             return(
            <ProdutosFlex>
               
               <ProdutoIndex>
                  <ProdutosImg src = {index.imagem}></ProdutosImg>    
              <p> {index.nome}</p> 
              <p>{index.valor}</p> 
              <p>{index.botao}</p> 
               </ProdutoIndex>
               
               </ProdutosFlex>
            
           
        
           
              )
            })
       
            return(

          <div>{produto}</div>
        )
      }else {
        produtoInverso = this.arrayInverso.map((index)=>{
        
          return(
          <div>
         <ProdutosFlex>
            
            <ProdutoIndex>
               <ProdutosImg src = {index.imagem}></ProdutosImg>    
           <p> {index.nome}</p> 
           <p>{index.valor}</p> 
           <p>{index.botao}</p> 
            </ProdutoIndex>
            
            </ProdutosFlex>
     
          </div>
           )
         }
        
        )
    
         return(

       <div>{produtoInverso}</div>
     )
      }
           
      }
   
    return (
        <div className = "Produtos-index">
        <HeaderProdutos>
      
        <p>Quantidade de produtos: 3</p> 
     
   
        <p>Ordenação:
         
          <select onChange = {this.ordem}>
            <option value = "Decrescente">
                Crescente
            </option>

              <option value = "crescente">
                Decrescente
              </option>

          </select>
       
       </p>  
       </HeaderProdutos>
        
      
       <div>{renderizarTelaCorreta()}</div> 
   
       </div>      
          
        );

}
}

export default ProdutosCard;
