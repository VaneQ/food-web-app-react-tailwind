import React, { useState } from 'react'
import { AiFillBulb, AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaHeart, FaQuestion, FaSave, FaTag, FaTruck, FaWallet, FaUserFriends } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleToggleNavbar = () => {
        setNav(!nav);
    }

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu onClick={handleToggleNavbar} size={25} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center 
                bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>PickUp</p>
                    <AiFillBulb size={25} className="cursor-pointer" />
                </div>
            </div>

            <div 
                className='bg-gray-200 rounded-full flex items-center 
                px-2 w-[200px] sm:w-[400px] lg:w-[500px]' >
                    
                <AiOutlineSearch size={25} />
                <input type='text' placeholder="Search food" className='bg-transparent p-2 focus:outline-none w-full' />
            </div>

            <button className='hidden md:flex items-center py-2 space-x-2 rounded-full hover:bg-black hover:text-white transition-all  duration-300'>
                <AiOutlineShoppingCart size={25} className="mr-2"/> Cart
            </button>

            {/**Overlay */}

            {
                nav ? <div className='bg-black/80 fixed w-full 
                h-screen z-10 top-0 left-0'></div> : ''
            }
            

            <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
                <AiOutlineClose onClick={handleToggleNavbar} size={25} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className='text-2xl p-4 '>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        
                        <li className='text-xl py-4 flex'>
                            <FaTruck size={25} className="mr-4"/> Orders
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaHeart size={25} className="mr-4"/> Favorites
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaWallet size={25} className="mr-4"/> Wallet 
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaQuestion size={25} className="mr-4"/> Help
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaTag size={25} className="mr-4"/> Promotions
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaSave size={25} className="mr-4"/> Best Ones
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaUserFriends size={25} className="mr-4"/> Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar