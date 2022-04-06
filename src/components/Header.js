import React from 'react';
//2.0-instalamos Style Components (import styled from '@emotion/styled') y lo importamos:
import styled from '@emotion/styled'
//11.0-Importamos PropTypes al componente Header:
import PropTypes from 'prop-types';


//2.1-creamos una cosntante Header y h1 para Style Components
const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
    `;
const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    font-weight: bold;
    text-align: center;
`;

//1.0-Creamos el componente Header
const Header = ({titulo}) => (  
    <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
    
);


//11.1-Creamos los PropTypes del componente Header:
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;