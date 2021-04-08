import React from 'react';
import styled from 'styled-components';

const FiltroContainer = styled.div`
    
    height: 80px;
    background-color: #d3d3d3;
    border: 1px solid black;
    padding: 8px;

`;



const InputContainer = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-bottom: 0px;
  
`
const Centralizados = styled.div`
  width: 1200px; 
  
  margin:auto;`


export class Filtros extends React.Component {

  
    render() {
      
      return (
          <div>
           
            <Centralizados>
            
            <FiltroContainer>
            <h3>Filtro</h3>
            <InputContainer>
            <input
          type="number"
          value={this.props.filtroMin}
          onChange={this.props.onChangeMinFilter}
          
        />
        
        <input
          type="number"
          
          value={this.props.filtroMax}
          onChange={this.props.onChangeMaxFilter}
        />

        <input
          
          
          value={this.props.filtroNome}
          onChange={this.props.onChangeNameFilter}
        />
        </InputContainer>
        </FiltroContainer>
          </Centralizados>
          
          
        
       
          </div>
      )
    }
  }
  
  export default Filtros;