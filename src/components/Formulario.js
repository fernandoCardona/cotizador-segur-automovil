import React, {useState} from 'react'
//3.1-Style Components (import styled from '@emotion/styled') y lo importamos:
import styled from '@emotion/styled'
//5.2-Importamos el archivo helper.js
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper'
//11.0-Importamos PropTypes al componente Formulario:
import PropTypes from 'prop-types';

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
const Error = styled.div`
    background-color: red;
    color: white;           
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;
    
                


const Formulario = ({guardarResumen, guardarCargando}) => {
    //4.0- Creamos el useState agregandolo al import de React y lo declaramos:
    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',       
        plan: ''
    });
    //4.1- extraemos los valores de los Inputs del Formulario:
    const{marca, year, plan} = datos;
    //4.2-Creamos la funcion 'obtenerInformacion' para leer los datos del Formulario y los pasamos al State. Agregamos onchange a cada select y input del formulario:
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    //4.3-Creamos la funcion 'cotizarSeguro' para enviar los datos del Formulario cuando el usuario presiona Submit en el boton:
    const cotizarSeguro = e => {
        e.preventDefault();

        //validar 
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true);
            //agregar una alerta
            console.log('Todos los campos son obligatorios');
            return;
        }
        guardarError(false);

        //Base de 2000
        let resultado = 2000;

        //5.1.1-Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);
        //console.log(diferencia);

        //5.1.2Por cada año se le resta 3% para
        resultado -= (( diferencia * 3 ) * resultado) / 100;
        //console.log(resultado);
       
        //5.2.1-Si es americano 15%, Si es asiatico 5%, Si es europeo 30%
        resultado = calcularMarca(marca) * resultado;
        //console.log(resultado);

        //5.3.1-Cada plan tiene un incremento de un porcentaje diferente Basico aumenta 20%, Completo aumenta 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);
        //console.log(resultado);

        //Total
        // guardarCargando pasa true 
        guardarCargando(true);

        //creamos un setimeout de 3 segundos para pasar los datos con un retardo de 3 segundos y que se vea el Spinner y depues guardarCargando pasa a false al pasarle datos 
        setTimeout(() => {

            // Elimina el spinner
            guardarCargando(false);

            // pasa la información al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 3000);
        
    }
    //4.4-Creamos un state para guardar el error en caso de que ocurra: Dentro de la etiqueta Form introducimos un ternario para enseñar el mensaje de Error en caso de que haya campos vacios:
    const [error, guardarError] = useState(false);
                                   
    

    return ( 
        //3.0-Creamos el Form de seleccion de tipo de coche 
        <form onSubmit={cotizarSeguro}>
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campos>
                <Label>Marca</Label>
                <Select name="marca" value={marca} onChange={obtenerInformacion}>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americamo</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select> 
            </Campos>
            <Campos>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={obtenerInformacion}>
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
                <InputRadio 
                type="radio" 
                name="plan" 
                value="basico" 
                checked={plan === "basico"} 
                onChange={obtenerInformacion}
                />Básico

                <InputRadio 
                type="radio" 
                name="plan" 
                value="completo" 
                checked={plan === "completo"}
                onChange={obtenerInformacion}
                />Completo

            </Campos>
            <Boton type="submit">Cotizar</Boton>

             
                                                                                                </form>
    );
}
//11.1-Creamos los PropTypes del componente Formulario:
Formulario.propTypes = {    
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
} 
export default Formulario;

    
        
                        
                        
                                                
                                                
                                                    
                                                    
                                                
                                                                                                                                 