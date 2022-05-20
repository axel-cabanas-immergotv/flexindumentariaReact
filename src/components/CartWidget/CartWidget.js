
export default function CartWidget ({count, img}) {
    return (
        <div className="cart">
            <img src={img} alt='carrito de compras' />
            <p>({count})</p>
        </div>
    )
}