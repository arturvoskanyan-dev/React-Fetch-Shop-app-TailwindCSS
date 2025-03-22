import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";

const Nav = () => {
  return (
    <nav>
        <section className='flex justify-around items-center p-4 border-1 border-gray-300'>
            <div>
                <h1 className='text-[#1ABCFE] text-2xl font-medium cursor-pointer'>MegaMart</h1>
            </div>
            <div>
                <div className='flex items-center relative'>
                    <input 
                        className='bg-gray-200 text-[#1ABCFE] w-sm rounded-sm p-2'
                        type="text" 
                    />
                    <FiSearch className='absolute right-4 text-[#1ABCFE] text-xl' />
                </div>
            </div>
            <div>
                <ul className='flex justify-around w-xs text-gray-700'>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/products"><li>Products</li></NavLink>
                    <NavLink to="/mens"><li>Mens</li></NavLink>
                    <NavLink to="/womens"><li>Womens</li></NavLink>
                </ul>
            </div>
            <NavLink className='flex gap-2' to="/basket">
                <SlBasket className='text-2xl text-[#1ABCFE] cursor-pointer' />
                <h2 className='cursor-pointer'>Cart</h2>
            </NavLink>
        </section>
    </nav>
  )
}

export default Nav
