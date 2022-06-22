import React from "react"
import { Link } from "react-router-dom"

export default function Main ({texto, texto2, categories}) {
    return (
        <section className="full__container">
            <div className='container'>
                <div className="main">
                    <div style={{display: 'inline-block'}}>
                        <h1 className="main__title" style={{'--duration': '1s'}}>
                            <span style={{'--delay': '.5s'}}>{texto}</span>
                            <span style={{'--delay': '.8s'}}>{texto2}</span>
                        </h1>
                    </div>
                    <h3>{categories}</h3>
                    <ul>
                        <li><Link to='/category/camperas'>Camperas</Link></li>
                        <li><Link to='/category/buzos'>Buzos</Link></li>
                        <li><Link to='/category/vestidos'>Vestidos</Link></li>
                        <li><Link to='/category/remeras'>Remeras</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}