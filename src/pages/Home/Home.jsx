import React, { useState, useEffect } from 'react'
import { CardItem } from "../index"

const Home = ({onBasket}) => {
    const [laptopsData, setLaptopsData] = useState([]);
    const [watches, setWatchesData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=5&skip=77&select')
            .then(res => res.json())
            .then(res => setLaptopsData(res.products));
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=5&skip=93&select')
            .then(res => res.json())
            .then(res => setWatchesData(res.products));
    }, [])

    return (
        <div className='p-24'>
            <section className='p-8'>
                <div>
                    <h1 className='text-gray-600 p-8 underline decoration-2 decoration-[#1ABCFE] underline-offset-8'>
                        Grab the best deal on <span className='text-[#1ABCFE] font-bold'>Laptops</span>
                    </h1>
                </div>

                <div className='flex justify-around'>
                    {
                        laptopsData.map((d) => {
                            return (
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
                            )
                        })
                    }
                </div>
            </section>

            <section className='p-8'>
                <div>
                    <h1 className='text-gray-600 p-8 underline decoration-2 decoration-[#1ABCFE] underline-offset-8'>
                        Grab the best deal on <span className='text-[#1ABCFE] font-bold'>Mens Watches</span>
                    </h1>
                </div>
                <div className='flex justify-around'>
                    {
                        watches.map((d) => {
                            return (
                                <CardItem
                                    key={d.id}
                                    to={`/${d.id}`}
                                    title={d.title}
                                    price={d.price}
                                    rating={d.rating}
                                    images={d.images[0]}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Home
