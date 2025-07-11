import React, { useContext } from 'react'
import { assets } from '../assets/assets' // Adjust the path as necessary
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext)
    const navigate = useNavigate();

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <img src={assets.logo} alt='' className='w-28 sm:w-32 lg:w-40' />
            </Link>
            <div className='flex items-center gap-4'>
                {
                    user ? (
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <button
                                onClick={() => navigate('/buy')}
                                className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                                <img className='w-5' src={assets.credit_star} alt='' />
                                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p>
                            </button>
                            <p className='text-gray-600 max-sm:pl-4'>Hi, {user.name}</p>
                            <div className='relative group'>
                                <img src={assets.profile_icon} alt='' className='w-10 drop-shadow cursor-pointer' />
                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm w-48 shadow-md'>
                                        <li
                                            onClick={logout}
                                            className='py-2 px-3 cursor-pointer hover:bg-gray-100 transition-all rounded'>
                                            Logout
                                        </li>
                                        <li
                                            onClick={() => openLink('https://jagadeeshrportfolio.vercel.app')}
                                            className='py-2 px-3 cursor-pointer hover:bg-gray-100 transition-all rounded'>
                                            Contact Developer
                                        </li>
                                        <li
                                            onClick={() => openLink('https://github.com/JagadeeshRallabandi/imagify_text_to_image_converter')}
                                            className='py-2 px-3 cursor-pointer hover:bg-gray-100 transition-all rounded'>
                                            Source Code
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-center gap-3 sm:gap-5'>

                               {/* Visible only on larger screens */}
                            <button
                                onClick={() => openLink('https://jagadeeshrportfolio.vercel.app')}
                                className='sm:flex items-center text-sm text-gray-700 hover:underline transition'>
                                Contact Developer
                            </button>
                            <button
                                onClick={() => openLink('https://github.com/JagadeeshRallabandi/imagify_text_to_image_converter')}
                                className='sm:flex items-center text-sm text-gray-700 hover:underline transition'>
                                Source Code
                            </button>                       
                            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
                            <button
                                onClick={() => setShowLogin(true)}
                                className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>
                                Login
                            </button>

                         
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
