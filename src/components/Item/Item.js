import ItemCount from "../ItemCount/ItemCount";
import RatingStar from "../RatingStar/RatingStar";

export default function Item ({product}) {
    return (
        <div className="col-lg-3 col-sm-4 px-2">
            <div className="banner mb-3">
                <div className="banner__link" href="#">
                    <a href="#">
                        <img src={product.img} alt="banner" />
                    </a>
                    <div className="banner__marca-info">
                        <p className="banner__marca">{product.marca}</p>
                        <RatingStar/>
                    </div>
                    <a href="#" className="banner__title">{product.nombre}</a>
                    <ItemCount stock={product.stock}/>
                    <p className="banner__price"><span>$</span>{product.precio}</p>
                </div>
            </div>
        </div>
    )
}