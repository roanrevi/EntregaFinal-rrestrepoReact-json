import React from 'react'
import {useState,useContext} from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [mail, setMail] = useState("");

    const handleSubmit= (e)=>{ 
        e.preventDefault()
    if (cart==[] ) {
    }  
        if (nombre === "") { 
            swal("Ingresa tu nombre completo");
            }
        else if(identificacion === "" ){
            swal("Ingresa tu identificación");
                }
        else if(mail === ""){
            swal("Ingresa tu correo electronico");    
        }
        else{
            swal("Tu orden han enviada a tu  correctamente a correo electronico, gracias por tu compra");
        } 
    };
    const borrarCompra=(id)=>{
        cambiarCompras(compra.filter((comprar) => {
            console.log(comprar)
            if(comprar.id!==id){
                return comprar;
                }
                    return;
            }
        ))}
    let acumulado=0;
    
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
                                <Button variant="primary" className='boton-card-compra' onClick={() => borrarCompra}>
                                Eliminar Compra
                                </Button>
                            </Card.Body>                            
                        </Card>   
                        
                    </div>
                );
            })};
        
        {   
            cart.forEach(element => {
            acumulado += (element.valor*element.horas);
            })}
            {cart.length >0?(
                <div>
                    <p className='total-compra'>Total Compra: ${acumulado}</p>
                    <form onSubmit={handleSubmit} className='formulario'>
                        <label htmlFor="">Nombre Completo</label>
                        <input className='nombre' type="text" onChange={(e)=>setNombre(e.target.value)}/><br/>
                        <label
                        htmlFor="">Idetificacion</label>
                        <input className='identificacion' type="number" onChange={(e)=>setIdentificacion(e.target.value)}/><br/>
                        <label htmlFor="">Correo electronico</label>
                        <input className='mail' type="email" onChange={(e)=>setMail(e.target.value)}/> <br/>
                        <button className='enviar-solicitud' type='submit'>Enviar</button>
                    </form>
                </div>
                    )
                :(<p className='cart-mensaje'>Hola, no has escogido a nadie para que te ayude en tu labor, escoge a los profesionales que te pueden ayudar a llevar a cabo esa gran labor.</p>)
            } 
        </>
        
    )

}

export default Cart