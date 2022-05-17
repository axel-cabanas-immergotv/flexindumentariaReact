import ItemCount from "../ItemCount/ItemCount";
import RatingStar from "../RatingStar/RatingStar";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function Item ({product}) {
    return (
        <div className="col-lg-3 col-sm-4 px-2">
            <div className="banner mb-3">
                <div className="banner__link" >
                        <img  src={product.img} alt="banner" />
                    <div className="banner__marca-info">
                        <p className="banner__marca" >{product.marca}</p>
                        <RatingStar/>
                    </div>
                    <a href="#" className="banner__title" >{product.nombre}</a>
                    <ItemCount stock={product.stock}/>
                    <p className="banner__price"><span>$</span>{product.precio}</p>
                </div>
            </div>
        </div>
    )
}