import React from 'react'

const Nav = () => {
  return (
    <nav>
        <section className='flex justify-around items-center p-4 border-1 border-gray-300'>
            <div>
                <h1 className='text-[#1ABCFE] text-2xl font-medium'>MegaMart</h1>
            </div>
            <div>
                <input 
                    className='bg-gray-200 text-[#1ABCFE] w-sm rounded-sm p-2'
                    type="text" 
                />
            </div>
            <div>
                <ul className='flex justify-around w-xs'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
    </nav>
  )
}

export default Nav
