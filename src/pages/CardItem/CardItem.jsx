import React from 'react'
import { NavLink, FaStar } from "../index"

const CardItem = ({ to, id, title, images, price, rating, onBasket }) => {
    return (
        <div className='border-1 border-gray-300 rounded-lg m-2 transition-all hover:shadow-2xl'>
            <NavLink to={to}>
                <img
                    className='bg-gray-100 w-[200px]'
                    src={images}
                />
            </NavLink>
            <div className='p-2'>
                <h3 className='text-center truncate max-w-[150px]'>{title}</h3>
                <h3 className='font-bold'>${parseFloat(price)}</h3>
                <span className='flex items-center'>
                    <FaStar className='text-amber-300' />{rating}
                </span>
            </div>
            <div className='text-center p-4'>
                <button className='bg-[#1ABCFE] text-white rounded-[12px] p-2 w-[120px] cursor-pointer transition-colors hover:bg-blue-500' onClick={() => onBasket(id)}>
                    Buy
                </button>
            </div>
        </div>
    )
}

export default CardItem
