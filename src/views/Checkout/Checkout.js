import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import { doc, addDoc, runTransaction, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";


export default function Checkout () {
    const { cart, setCart, data, setData } = React.useContext(CartContext);
    const [text, setText] = React.useState("")
    
    const handdleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const handdleSubmit = async (event) => {
        event.preventDefault();
        const total = cart.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
        const order = {
          buyer: data,
          items: cart,
          total: total,
        };

        const updateProducts = async () => {
            const db = getFirestore ()
            cart.map( async (item) => {
              const productRef = doc(db, 'productos', item.id)
              await runTransaction(db, async (transaction) => {
              const transfDoc = await transaction.get(productRef);
              if (!transfDoc.exists()) {
                console.error("El documento no existe")
              }
              const newStock = transfDoc.data().stock - item.quantity;
              transaction.update(productRef, { stock: newStock });
              setText("¡Compra exitosa!")
              setTimeout(() => {
                setCart([]);
              }, 2500);
            });
            })
        }

        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, order).then(() => {
        updateProducts()
        })
  }
        

    return (
        <div className="container">
            {cart.length === 0 ? 
            (
                <>
                <NavBar imgCart={'../../assets/cart.png'} display='none' category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' img={'../../assets/logoflex.png'} />
                <div className="cart__container-empty">
                    <h1>No hay nada en el carrito</h1>
                    <Link to='/products'>
                        <button className="item__detail-btn-link-buy">
                            Comprar ahora
                        </button>
                    </Link>
                </div>
                </>
            ) : (
                <>
                    <NavBar category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
                    <div className="d-flex mt-5">
                        <div className="input__full-container p-3 col-md-6">
                            <h2 className="mb-4">Datos personales</h2>
                            <form onSubmit={handdleSubmit}>
                                <div className="d-flex">
                                    <div className="input-container col-md-6 p-right">
                                        <input onChange={handdleChange} type='text' name='name' required className="input" />
                                        <label for='name' className="input-label">Nombre</label>
                                    </div>
                                    <div className="input-container col-md-6">
                                        <input onChange={handdleChange} type='text' name='surname' required className="input" />
                                        <label for='name' className="input-label">Apellido</label>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="input-container col-md-8 p-right">
                                        <input onChange={handdleChange} type='text' name='direction' required className="input" />
                                        <label for='name' className="input-label" >Direccion</label>
                                    </div>
                                    <div className="input-container col-md-4">
                                        <input onChange={handdleChange} type='text' name='dpto' required className="input" />
                                        <label for='name' className="input-label">Piso/Dpto</label>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="input-container col-md-4 p-right">
                                        <input onChange={handdleChange} type='text' name='city' required className="input" />
                                        <label for='name' className="input-label" >Ciudad</label>
                                    </div>
                                    <div className="input-container col-md-4 p-right">
                                        <input onChange={handdleChange} type='text' name='province' required className="input" />
                                        <label for='name' className="input-label">Provincia</label>
                                    </div>
                                    <div className="input-container col-md-4">
                                        <input onChange={handdleChange} type='text' name='postal' required className="input" />
                                        <label for='name' className="input-label">Codigo postal</label>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="input-container col-md-7 p-right">
                                        <input onChange={handdleChange} type='text' name='dni' required className="input" />
                                        <label for='name' className="input-label" >DNI</label>
                                    </div>
                                    <div className="input-container col-md-5">
                                        <input type='text' name='number' required className="input" />
                                        <label for='name' className="input-label">Movil</label>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="input-container col-md-12">
                                        <input onChange={handdleChange} type='email' name='email' required className="input" />
                                        <label for='name' className="input-label">Email</label>
                                    </div>
                                </div>
                                
                                <button  className="item__detail-btn-link-buy mt-2"> Finalizar compra</button>
                                <p className="purchase-successful">{text}</p>
                            </form>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </>
            )
        }
        </div>
        
    )
}