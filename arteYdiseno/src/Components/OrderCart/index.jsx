const OrderCart = props => {
    const { id, nombre, imageUrl, precio, handleDelete } = props

    return (
        <div className="flex justify-between items-center mb-3 ">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover " src={ imageUrl } alt={ nombre } />
                </figure>
                    <p className="text-sm font-light">{ nombre }</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-Lg font-medium">{ precio }</p>
                <div onClick={()=> handleDelete(id)}> x </div>
            </div>
        </div>
    )
}

export default OrderCart