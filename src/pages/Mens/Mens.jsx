import React, {useState, useEffect} from 'react'
import CardItem from '../CardItem/CardItem';

const Mens = ({onBasket}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=15&skip=83&select')
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
                        title={d.title}
                        price={d.price}
                        rating={d.rating}
                        images={d.images[0]}
                        onBasket={onBasket}
                    />
                ))}
            </div>
        </section>
    )
}

export default Mens
