import img from '../../assets/img/productos/giant-talon1.jpg'

const ItemDetail = (listProduct) => {
    return (
        <>
            <div className="DetailFlex">
                <div className="imagenDetail">
                    <img src={listProduct.listProduct.imagen} alt={listProduct.listProduct.nombre} className='imagenProdDetail' />
                </div>
                <div className='infoDetail'>
                    <h1 className='nameProdDetail'>{listProduct.listProduct.nombre}</h1>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Diciplina: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.categoria}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Marca: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.marca}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Material: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.material}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Modelo: </h3>
                        <h3 className='varInfo'>{listProduct.listProduct.modelo}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Precio: </h3>
                        <h3 className='varInfo'>$ {listProduct.listProduct.precio}</h3>
                    </div>
                    <div className='infoDetailFlex'>
                        <h3 className='textInfo'>Stock: </h3>
                        <h3 className='stockDetail'>{listProduct.listProduct.stock}</h3>
                    </div>
                </div>
            {/* NOSE COMO ACCEDER A LOS PROPIEDADES DEL OBJETO */}
            </div>
            <div className='descripcionDetail'>
                    <p>La {listProduct.listProduct.nombre} es una bicicleta de cross country diseñada para resultar eficiente sobre superficies de montaña gracias a su horquilla de suspensión con bloqueo y a su sencilla transmisión 1x10 Shimano. Se ha diseñado para el mountain bike, pero también está equipada con soportes para portabultos y pata de cabra, por tanto, es una gran opción para las aventuras diarias por la ciudad.</p>
                </div>
        </>
    )
}

export {ItemDetail};