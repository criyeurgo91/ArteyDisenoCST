import { useContext } from 'react'
import { CartContext } from '../Context'
import './style.css'

const ProductDetail = () => {
    const context = useContext(CartContext);
    
     console.log('Producto a Mostrar: ', context.productToShow)


    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-black rounded-lg fixed bg-slate-300`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div className='absolute right-0 top-0 flex justify-center items-center bg-white rounded-full m-2 p-1 w-6 h-6 text-red-600' onClick={() => context.closeProductDetail()}>x</div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                src={context.productToShow.photo} 
                alt={context.productToShow.nombre} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.precio}</span>
                <span className='font-medium text-md'>${context.productToShow.nombre}</span>
                <span className='font-light text-sm'>${context.productToShow.dimensiones}</span>
            </p>
        </aside>
    )
}

export default ProductDetail