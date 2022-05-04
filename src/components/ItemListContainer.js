export default function ItemListContainer ({texto, texto2, gretting}) {
    return (
        <div className='container'>
            <div className="main">
                <h1>{texto}</h1>
                <h2>{texto2}</h2>
                <h3>{gretting}</h3>
                <ul>
                    <li><a href="#link">Remeras</a></li>
                    <li><a href="#link">Calzados</a></li>
                    <li><a href="#link">Pantalones</a></li>
                    <li><a href="#link">Buzos</a></li>
                </ul>
            </div>
        </div>
    )
}