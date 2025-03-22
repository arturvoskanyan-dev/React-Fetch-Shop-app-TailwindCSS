import React, { useState } from 'react'
import BasketItem from './BasketItem/BasketItem';

const Basket = () => {
    const data = JSON.parse(localStorage.getItem("data"))

    return (
        <div className='my-12'>
            {
                data?.map((d) => {
                    return (
                        <BasketItem 
                            key={d.id}
                            title={d.title}
                            price={d.price}
                            to={`/${d.id}`}
                            image={d.images[0]}
                        />
                    )
                })
            }
        </div>
    )
}

export default Basket