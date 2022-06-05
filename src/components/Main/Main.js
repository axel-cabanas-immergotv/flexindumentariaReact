import React from "react"
import { Link } from "react-router-dom"

export default function Main ({texto, texto2, categories}) {
    return (
        <section className="full__container">
            <div className='container'>
                <div className="main">
                    <h1>{texto}</h1>
                    <h2>{texto2}</h2>
                    <h3>{categories}</h3>
                    <ul>
                        <li><Link to='/category/1'>Camperas</Link></li>
                        <li><Link to='/category/2'>Buzos</Link></li>
                        <li><Link to='/category/3'>Vestidos</Link></li>
                        <li><Link to='/category/4'>Remeras</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}