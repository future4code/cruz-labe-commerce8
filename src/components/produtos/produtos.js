import React from 'react';
import styled from 'styled-components'
import App from '../../App'

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

class Produtos extends React.Component  {

    render(){
    
    
    return (
        
     <HeaderProdutos>
      
        <p>Quantidade de produtos:</p> 
     
   
        <p>Ordenação:
         
          <select>
            <option value = "">
                Crescente
            </option>

              <option value = "">
                Decrescente
              </option>

          </select>
       
       </p>  
       </HeaderProdutos>
   
        );

}
}

export default Produtos;