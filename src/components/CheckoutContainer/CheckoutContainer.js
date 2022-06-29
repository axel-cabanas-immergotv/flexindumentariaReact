import React from "react";
import { doc, addDoc, runTransaction, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Checkout from "../../views/Checkout/Checkout";
import Footer from "../Footer/Footer";

export default function CheckoutContainer () {
    const { cart, data, setData, total } = React.useContext(CartContext);
    const [text, setText] = React.useState("");
    const [textBuy, setTextBuy] = React.useState("");
    console.log(data)

    const handdleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const handdleSubmit = async (event) => {
        event.preventDefault();

        const order = {
          buyer: data,
          items: cart,
          total: total,
          date: new Date()
        };

        // validity confirm email
        if (data.email === data.confirmEmail) {
            const updateProducts = async (id) => {
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
                  setTextBuy('rgb(6 173 53)');
                  setText(`¡Compra realizada!, tu orden es ${id}`);
                });
                })
            }
    
            const db = getFirestore()
            const ordersCollection = collection(db, "orders")
            await addDoc(ordersCollection, order).then(({id}) => {
            updateProducts(id)
            })
        } else {
            setTextBuy("rgb(205, 9, 9)");
            setText("¡Email no coincide!");
        }
  }



    return (
        <section>
            {cart.length === 0 ?
            (
                <>
                <NavBar display='none' category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
                <div className="cart__container-empty container-lg">
                    <h1>No hay nada en el carrito</h1>
                    <Link to='/products'>
                        <button className="item__detail-btn-link-buy">
                            Comprar ahora
                        </button>
                    </Link>
                </div>
                </>
            ) :
            (
                <section>
                    <NavBar category1='Productos' category2='Ayuda' category3='Acerca de' category4='Contacto' />
                    <div className="d-flex mt-5 container-lg flex-wrap">
                        <div className="input__full-container p-3 col-md-7">
                            <h2 className="mb-4">Datos personales</h2>
                            <form onSubmit={handdleSubmit}>
                                <div className="d-flex">
                                    <div className="input-container p-right">
                                        <input onChange={handdleChange} type='text' name='name' required className="input" />
                                        <label for='name' className="input-label">Nombre</label>
                                    </div>
                                    <div className="input-container">
                                        <input onChange={handdleChange} type='text' name='surname' required className="input" />
                                        <label for='name' className="input-label">Apellido</label>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="input-container p-right">
                                        <input onChange={handdleChange} type='text' name='direction' required className="input" />
                                        <label for='name' className="input-label" >Direccion</label>
                                    </div>
                                    <div className="input-container">
                                        <input onChange={handdleChange} type='number' name='dpto' className="input" />
                                        <label for='name' className="input-label">Piso/Dpto</label>
                                    </div>
                                </div>
                                <div className="d-flex form__checkout-mq mt-3">
                                    <div className="input-container width-50">
                                        <input onChange={handdleChange} type='text' name='city' required className="input" />
                                        <label for='name' className="input-label" >Ciudad</label>
                                    </div>
                                    <div className="d-flex">
                                        <div className="input-container p-md">
                                            <input onChange={handdleChange} type='text' name='province' required className="input" />
                                            <label for='name' className="input-label">Provincia</label>
                                        </div>
                                        <div className="input-container">
                                            <input onChange={handdleChange} type='text' name='postal' required className="input" />
                                            <label for='name' className="input-label">Postal</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div className="input-container p-right">
                                        <input onChange={handdleChange} type='number' name='dni' required className="input" />
                                        <label for='name' className="input-label" >DNI</label>
                                    </div>
                                    <div className="input-container">
                                        <input type='number' name='number' required className="input" />
                                        <label for='name' className="input-label">Movil</label>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="input-container col-md-12">
                                        <input onChange={handdleChange} type='email' name='email' required className="input" />
                                        <label for='name' className="input-label">Email</label>
                                    </div>
                                    <div className="input-container col-md-12 mt-3">
                                        <input onChange={handdleChange} type='email' name='confirmEmail' required className="input" />
                                        <label for='name' className="input-label">Confirmar email</label>
                                    </div>
                                </div>
                                <button  className="item__detail-btn-link-buy mt-3" > Finalizar compra</button>
                                <p className="purchase-successful mt-3" style={{color: textBuy}} >{text}</p>
                            </form>
                        </div>
                        <div className="col-md-5 col-12 p-left checkout__items">
                            {cart.map(item => {
                            return <Checkout 
                            product={item} 
                            key={item.id}
                            handdleChange={handdleChange}
                            handdleSubmit={handdleSubmit}
                            text={text}
                            />
                            })}
                            <p style={{textAlign: 'center'}} className="cart__container-item-price"><strong>TOTAL:</strong> ${total}</p>
                        </div>
                        
                    </div>
                    
                </section>
            )
            }
            <Footer/>
        </section>
    )
}

