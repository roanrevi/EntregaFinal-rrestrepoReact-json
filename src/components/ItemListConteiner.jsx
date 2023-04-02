import React from 'react'
import data from "../datos.json";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListConteiner = ({greeting}) => {
    const{cargo}=useParams();
            const persFilter=data.filter((dato)=>dato.CARGO==cargo);
            
    return (        
        <>        
            <p>{greeting}</p>
            {
                <div>
                    {cargo?<ItemList datos={persFilter}/> :  <ItemList datos={data}/>}
                </div>                 
            }
        </>
    )
}



export default ItemListConteiner;