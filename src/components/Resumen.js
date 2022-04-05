import React, {Fragment} from 'react'

const Resumen = ({datos}) => {
    //extraer datos
    const {marca, year, plan} = datos;
    //console.log(datos);
     
    if(marca === '' || year === '' || plan === ''){
        return null;
    }
    return ( 
        <Fragment>
            <h2>Resumen de Cotizacion</h2> 
            <ul>
                    <li>Marca: {marca}</li>
                    <li>Año: {year}</li>
                    <li>Plan: {plan}</li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;