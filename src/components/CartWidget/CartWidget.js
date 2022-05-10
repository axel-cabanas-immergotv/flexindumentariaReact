
export default function CartWidget ({count}) {
    return (
        <div className="cart">
            <img src='./assets/cart.png' alt='carrito de compras' />
            <p>({count})</p>
        </div>
    )
}