import {useContext} from 'react'
import { CartContext } from '../Context'
import './style.css'
import OrderCart from '../../Components/OrderCart';

const OrderProduct = () => {
    const context = useContext(CartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id  != id )
        context.setCartProducts(filteredProducts)
    }
    
    // console.log('Producto a Mostrar: ', context.productToShow)


    return (
        <aside 
        className={`${context.isOrderProductOpen ? 'flex' : 'hidden'} menu flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>ProductList</h2>
                <div onClick={() => context.closeOrderProduct() }>x</div>
            </div>
            <div className='px-6 overflow-y-scroll'>

            {
                context.cartProducts.map( product => (
                    <OrderCart 
                        key = {product.id}
                        id = {product.id}
                        nombre = {product.nombre}
                        imageUrl = {product.photo}
                        precio = {product.precio}
                        handleDelete = {handleDelete}
                    />
                ) )
            }
            </div>

        </aside>
    )
}

export default OrderProduct