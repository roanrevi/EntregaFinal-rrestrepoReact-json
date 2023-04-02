import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail";
import data from "../datos.json";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {    
        // const{id}=useParams();
            
        
        // const [personal, setPersonal]=useState([]);
        //     useEffect(()=>{
        //         async function fetchInfo(){
        //             try{
        //                 const response= await fetch(data);
        //                 const data=await response.json();
        //                 setPersonal(data);
        //                 }
        //                 catch (error){
        //                     console.log(error)

        //                 }
        //         }
        //     fetchInfo();
        //     }, []); 

        //     const usuarioFilter=data.filter((dato)=>dato.id == id)
            return <ItemDetail datos={data}/>;
        
        }

export default ItemDetailContainer