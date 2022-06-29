import Item from "../Item/Item";

export default function ItemList ({products}) {
    return (
        <section className="bg-light pt-5 pb-5">
            <div className="list__container container-lg">
                {products.map(item => {
                    return <Item  product={item} key={item.id} />
                })}
            </div>
        </section>
    )
}