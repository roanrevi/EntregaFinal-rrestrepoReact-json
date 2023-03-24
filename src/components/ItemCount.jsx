import { useContext,useState } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ id, nombre, cargo, horas, fecha,valor }) => {
    const [cart, setCart] = useContext(CartContext);
    const [contador, setContador] = useState(1); 

    const sumar = () => {
        if(contador<horas)
        {setContador(contador + 1)}
        ;
    };
    const restar = () => {
        if(contador >0)
        {setContador(contador - 1);}
        else{
            setContador(0)
        }
    };
    const adicionACart = () => {
        setCart((ItemActuales) => {
            const ItemEncontrardo = ItemActuales.find((item) => item.id === id);                
            if (ItemEncontrardo) {
                return ItemActuales.map((item) => {
                if (item.id === id) {
                    return { ...item, horas: item.horas + contador };
                } else {
                    return item;
                }
                });
            } else {
                return [...ItemActuales, { id, horas: contador, fecha, nombre, cargo, valor}];
            }
            });
        };
    return (
        <div className='botons-add'>
            <p>{contador}</p>
            <button className="boton" onClick={restar}> - </button> 
            <button className="boton" onClick={sumar}> + </button>            
            <br></br> 
            <button className="boton-adicionar" onClick={adicionACart}> Adicionar al carro </button> 
        </div>
        );
    };
export default ItemCount;