import React from 'react'


//3.1-Style Components (import styled from '@emotion/styled') y lo importamos:
import styled from '@emotion/styled'
//3.2-Con Style components creamos los estilos de las diferentes elementos del Formulario
const Campos = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.div`
    flex: 0 0 100px;
`; 
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;
    transition: background-color .3s ease;
    border-radius: 10px;
    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
        }
`;

const Formulario = () => {
    return ( 
        //3.0-Creamos el Form de seleccion de tipo de coche 
        <form>
            <Campos>
                <Label>Marca</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    <option value="americamo">Americamo</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select> 
            </Campos>
            <Campos>
                <Label>Año</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select> 
            </Campos>
            <Campos>
                <Label>Plan</Label>
                <InputRadio type="radio" name="plan" value="basico"/>Básico
                <InputRadio type="radio" name="plan" value="completo"/>Completo
            </Campos>
            <Boton type="button">Cotizar</Boton>

             
                                                                                                </form>
    );
}
 
export default Formulario;

    
        
                        
                        
                                                
                                                
                                                    
                                                    
                                                
                                                                                                                                 