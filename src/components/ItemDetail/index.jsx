import img from '../../assets/img/productos/giant-talon1.jpg'

const ItemDetail = (listProduct) => {

    console.log(listProduct)

    return (
        <>
            <div className="DetailGrid">
                <div className="imagenDetail">
                    <img src={img} alt={listProduct.nombre} />
                </div>
                <div className='infoDetail'>
                    <h1>{listProduct.nombre}</h1>
                </div>

            </div>
        </>
    )
}

export {ItemDetail};