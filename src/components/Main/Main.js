import React from "react"
import { Link } from "react-router-dom"

export default function Main ({texto, texto2, categories}) {
    return (
        <section className="full__container">
            <div className='container-lg'>
                <div className="main" style={{display: 'inline-block'}}>
                    <div >
                        <h1 className="main__animation" style={{'--duration': '1s'}}>
                            <span className="main__animation-text" style={{'--delay': '.5s'}}>{texto}</span>
                            <span className="main__animation-text" style={{'--delay': '.8s'}}>{texto2}</span>
                        </h1>
                    </div>
                    <div className="main__animation" style={{'--duration': '1s'}}>
                        <h3 className="main__animation-text" style={{'--delay': '.5s'}}>{categories}</h3>
                    </div>
                    <ul className="main__animation" style={{'--duration': '1s', display: 'inline-block'}}>
                        <li>
                            <Link className="main__animation-text" style={{'--delay': '.6s'}} to='/category/camperas'>Camperas</Link>
                        </li>
                        <li>
                            <Link className="main__animation-text" style={{'--delay': '.7s'}} to='/category/buzos'>Buzos</Link>
                        </li>
                        <li>
                            <Link className="main__animation-text" style={{'--delay': '.8s'}} to='/category/vestidos'>Vestidos</Link>
                        </li>
                        <li>
                            <Link className="main__animation-text" style={{'--delay': '.9s'}} to='/category/remeras'>Remeras</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}