import React from 'react'
import { CardItem } from "../index"

const Products = ({ data, onBasket }) => {
    return (
        <section className='p-8'>
            <div className='flex justify-around flex-wrap p-12'>
                {data?.map((d) => (
                    <CardItem
                        key={d.id}
                        id={d.id}
                        to={`/${d.id}`}
                        images={d.images[0]}
                        title={d.title}
                        price={d.price}
                        rating={d.rating}
                        onBasket={onBasket}
                    />
                ))}
            </div>
        </section>
    )
}

export default Products
