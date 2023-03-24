import React from 'react'
import Item from "./Item";



const ItemList = ({datos}) => {
    return (
        <div className='contenedor-cards'>
            {datos.map((dato)=>(
                
                <Item 
                key={dato.ID}               
                id={dato.ID}
                nombre={dato.NOMBRE}
                cargo={dato.CARGO}
                horas={dato.HORAS}
                fecha={dato.FECHA}
                valor={dato.VALOR}
                />

                ))}
        </div>
        );
    };
    

export default ItemList