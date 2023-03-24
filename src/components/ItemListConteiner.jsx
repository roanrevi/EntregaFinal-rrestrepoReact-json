import React from 'react'
import { useEffect,useState } from 'react';
import data from "../datos.json";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListConteiner = ({greeting}) => {
    const{cargo}=useParams();
    const [personal, setPersonal]=useState([]);

            useEffect(()=>{
                async function fetchInfo(){
                    try{
                        const response= await fetch(data);
                        const data=await response.json();
                        setPersonal(data)
                        }
                        catch (error){
                            console.log(error)

                        }
                }
            fetchInfo();
            }, []); 
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



export default ItemListConteiner