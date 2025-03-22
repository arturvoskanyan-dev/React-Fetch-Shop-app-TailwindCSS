import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import app from "../../assets/App_Store.png"
import play from "../../assets/Play_Store.png"

const Footer = () => {
    return (
        <footer>
            <section className='flex justify-evenly items-top bg-[#1ABCFE] text-white p-12'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold cursor-pointer'>MegaMart</h1>
                    <h2 className='text-xl font-bold'>Contact Us</h2>
                    <h2>Whats App</h2>
                    <div className='flex'>
                        <IoLogoWhatsapp className='text-2xl' />
                        <span>+374-33-78-37-37</span>
                    </div>
                    <h2>Call Us</h2>
                    <div className='flex'>
                        <BiPhoneCall className='text-2xl' />
                        <span>+374-33-78-37-37</span>
                    </div>
                    <h1 className='font-bold'>Download App</h1>
                    <div className='flex'>
                        <img src={app} className='w-[150px]' />
                        <img src={play} className='w-[150px]' />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='underline decoration-2 underline-offset-6'>Most Popular Categories</h1>
                    <ul className='list-disc'>
                        <li>Staples</li>
                        <li>Beverages</li>
                        <li>Personal Care</li>
                        <li>Home Care</li>
                        <li>Baby Care</li>
                        <li>Vegetables & Fruits</li>
                        <li>Snacks & Food</li>
                        <li>Dairy & Bakery</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='underline decoration-2 underline-offset-6'>Customer Services</h1>
                    <ul className='list-disc'>
                        <li>About Us</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>E-waste Polisy</li>
                        <li>Cancelletion & Return Policy</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer
