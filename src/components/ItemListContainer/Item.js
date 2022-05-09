import Star from "../RatingStar/RatingStar";

export default function Item ({product}) {
    return (
        <div className="col-lg-3 col-sm-4 px-2">
            <div className="banner mb-3">
                <a className="banner__link" href="#">
                    <img src={product.img} alt="banner" />
                    <div className="banner__marca-info">
                        <a className="banner__marca">{product.marca}</a>
                        <Star/>
                    </div>
                    <p className="banner__title">{product.nombre}</p>
                    <p className="banner__price"><span>$</span>{product.precio}</p>
                </a>
            </div>
        </div>
    )
}