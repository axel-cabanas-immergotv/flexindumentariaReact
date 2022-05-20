import RatingStar from "../RatingStar/RatingStar";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail ({product}) {
    return (
        <section className="bg-light p-70">
            <div className="container d-flex item__detail">
                <div className="col-md-8 item__detail-img">
                    <img className="img-fluid" src={`../../${product.img}`} />
                </div>
                <div className="col-md-4 p-3 line">
                    <div className="item__detail-info">
                        <p href="#" className="mb-3 item__detail-info-name">{product.nombre}</p>
                        <div className="item__detail-marca mb-3">
                            <p className="">{product.marca}</p>
                            <RatingStar/>
                        </div>
                        <ItemCount className="item__detail-count" stock={product.stock}/>
                        <p className="item__detail-info-price mt-3">${product.precio}</p>
                    </div>
                    
                    <div className="item__detail-talles mt-4">
                        <p className="mt-2 mb-2 ">Talle:</p>
                        <button className="item__detail-talles-btn">S</button>
                        <button className="item__detail-talles-btn">M</button>
                        <button className="item__detail-talles-btn">L</button>
                        <button className="item__detail-talles-btn">XL</button>
                    </div>
                    <div className="item__detail-btn d-flex flex-column mt-4">
                        <button className="item__detail-btn-buy mb-2">Comprar ahora</button>
                        <button className="item__detail-btn-cart">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </section>
    )
}