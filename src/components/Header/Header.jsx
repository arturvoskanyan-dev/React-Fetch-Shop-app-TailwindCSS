import React from 'react'
import Nav from '../Nav/Nav';
import { LuMapPin } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";

const Header = () => {
    return (
        <header>
            <section className='flex justify-around p-2 bg-gray-200 text-gray-600'>
                <div>
                    <h3>Welcome to worldwide MegaMart!</h3>
                </div>
                <div className='flex justify-around items-center w-[420px]'>
                    <LuMapPin className='text-[#1ABCFE]' />
                    <h3>Deliver to 423651 | </h3>
                    <BsTruck className='text-[#1ABCFE]' />
                    <h3>Track your order | </h3>
                    <BiSolidOffer className='text-[#1ABCFE]' />
                    <h3>All Offers</h3>
                </div>
            </section>
            <Nav />
        </header>
    )
}

export default Header
