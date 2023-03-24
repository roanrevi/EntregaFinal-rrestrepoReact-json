import React from 'react'
import {useState,useContext} from "react";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../context/ShoppingCartContext";
import Card from 'react-bootstrap/Card';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [mail, setMail] = useState("");
    const handleSubmit= (e)=>{ 
        
        if (nombre === "") { 
            alert("ingresar nombre")            
            
            }
        else if(identificacion === "" ){
            alert("ingresar identificacion")
                }
        else if(mail === ""){
            alert("ingresar mail")    
        }
        else{
            alert("Datos ingresados correctamente")
        
        } 
    };

    

    
    return (   
        <>
            {cart.map((compra) => { 
                
        
                return (                    
                    <div key={compra.id} className="contenedor-item-compra">                    
                        <Card style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title className='card-nombre' >Cargo:<br/>
                                {compra.cargo}
                                </Card.Title>
                                <Card.Title className='card-nombre' >Horas requeridas:<br/>
                                {compra.horas}
                                </Card.Title>
                                <Card.Title className='card-nombre' >Valor de la compra:<br/>
                                {compra.horas*compra.valor}
                                </Card.Title>
                                <Button variant="primary" className='boton-card-compra'>
                                Eliminar Compra
                                </Button>
                            </Card.Body>                            
                        </Card>                        
                    </div>
                );
            })};

    
        <form onSubmit={handleSubmit} className='formulario'>
            <label htmlFor="">Nombre Completo</label>
            <input className='nombre' type="text" onChange={(e)=>setNombre(e.target.value)}/><br/>
            <label htmlFor="">Idetificacion</label>
            <input className='identificacion' type="text" onChange={(e)=>setIdentificacion(e.target.value)}/><br/>
            <label htmlFor="">Correo electronico</label>
            <input className='mail' type="text" onChange={(e)=>setMail(e.target.value)}/> <br/>
            <button className='enviar-solicitud' type='submit'>Enviar</button>
        </form>
        </>
        
    )

}

export default Cart