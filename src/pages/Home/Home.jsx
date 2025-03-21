import React, { useState, useEffect } from 'react'
import {CardItem} from "../index"

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=5&skip=77&select')
            .then(res => res.json())
            .then(res => setData(res.products));
    }, [])
    console.log(data);

    return (
        <div className='p-12'>
            <div>
                <h1 className='text-gray-600 p-8 underline decoration-2 decoration-[#1ABCFE] underline-offset-8'>Grab the best deal on <span className='text-[#1ABCFE] font-bold'>Smartphones</span></h1>
            </div>
            <div className='flex justify-around'>
                {
                    data.map((d) => {
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
        </div>
    )
}

export default Home
