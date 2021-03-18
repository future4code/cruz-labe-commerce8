import React from 'react';
import styled from 'styled-components';

const FiltroContainer = styled.div`
    
    
    background-color: #d3d3d3;
    border: 1px solid black;
    padding: 8px;

`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
`
const Centralizados = styled.div`
  width: 1200px; 
  height: 100vh;
  margin:auto;`


export class Filtros extends React.Component {

    render() {
      return (
          <div>
            <Centralizados>
        <FiltroContainer>      
        <h3>Filtros</h3>
          
            <h4>Valor mínimo:</h4>
            <InputContainer>
            <input
              type="number"
              value={this.props.filtroMin}
              onChange={this.props.onChangefiltroMin}
            />
            </InputContainer>
            
            <h4>Valor máximo:</h4>
            <InputContainer>
            <input
              type="number"
              value={this.props.filtroMax}
              onChange={this.props.onChangefiltroMax}
            />
            </InputContainer>
            <h4>Busca por nome:</h4>
            <InputContainer>
            <input
              type="text"
              value={this.props. filtroNome}
              onChange={this.props.onChangefiltroNome}
            />
            </InputContainer>
          </FiltroContainer>
          </Centralizados>
          </div>
      )
    }
  }
  
  export default Filtros;