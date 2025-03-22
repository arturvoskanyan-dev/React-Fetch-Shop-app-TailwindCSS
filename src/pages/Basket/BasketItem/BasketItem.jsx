import React from 'react'
import { NavLink } from 'react-router-dom'

const BasketItem = ({ to, image, title, price}) => {
    return (
        <div className='flex items-center'>
            <NavLink to={to}>
                <div>
                    <img className='w-[400px]' src={image} />
                </div>
            </NavLink>
            <section>
                <NavLink to={to}>
                    <div className='flex justify-around w-[400px]'>
                        <h2 className='text-blue-500 text-2xl'>{title}</h2>
                        <span className='text-2xl'>{Math.round(price)}$</span>
                    </div>
                </NavLink>
                <div>
                </div>
            </section>
            {/* <button onClick={() => onRemove()}>x Remove</button> */}
        </div>
    )
}

export default BasketItem
