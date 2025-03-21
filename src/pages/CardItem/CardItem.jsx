import React from 'react'
import { NavLink, FaStar } from "../index"

const CardItem = ({to, title, images, price, rating}) => {
    return (
        <div>
            <div className='border-1 border-gray-300 rounded-lg'>
                <NavLink to={to}>
                    <img
                        className='bg-gray-100 w-[200px]'
                        src={images}
                    />
                </NavLink>
                <div className='p-2'>
                    <h3 className='text-center truncate max-w-[150px]'>{title}</h3>
                    <h3 className='font-bold'>${price}</h3>
                    <span className='flex items-center'>
                        <FaStar className='text-amber-300' />{rating}
                    </span>
                </div>
                <div className='text-center p-4'>
                    <button className='bg-[#1ABCFE] text-white rounded-[12px] p-2 w-[120px] cursor-pointer transition-colors hover:bg-blue-500'>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem
