import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem/CardItem';

const Womens = ({onBasket}) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=30&skip=171&select')
            .then(res => res.json())
            .then(res => setData(res.products));
    }, [])

    return (
        <section className='p-24'>
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

export default Womens
