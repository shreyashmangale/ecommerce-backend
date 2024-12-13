import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { updateCategory } from '../actions/actions'
import { Link, useLocation } from 'react-router-dom'

import { useSearch } from '../context/searchContext';

const Navbar = ({cartItemsLength, favouritesItemsLength}) => {

    const location = useLocation();

    

    const dispatch = useDispatch();


    const { searchQuery, setSearchQuery } = useSearch();


    const [searchedName, setSearchedName] = useState(location.pathname.split("/")[2]);


    function handleCategory(categoryVal) {
        dispatch(updateCategory(categoryVal));
    }


    const handleSearch = (e) => {
        setSearchQuery(e.target.value); // Update the search query in the context
    };



    return (
        <div className='font-[montserrat] fixed top-0 left-0 w-full shadow z-50'>
            <div className='flex justify-between items-center bg-slate-600 sm:text-base text-xs text-white border-b-2 border-gray-500 sm:px-16 px-4 '>
                <div className='py-2'>
                    <h2>
                        Call +0123 456 789
                    </h2>
                </div>
                <div className='flex items-center sm:gap-8 gap-4 px-6 py-2'>
                    <h2>USD</h2>
                    <h2>English</h2>
                        <button className='hover:bg-amber-500 sm:px-4 py-2 rounded-md hover:transition ease-in-out'>Sign Up</button>
                </div>
            </div>
            <div className='flex gap-2 md:justify-between justify-around items-center bg-slate-600 sm:px-16 px-1 pt-1'>
                <div className='w-fit bg-red-500 sm:px-4 py-2 rounded-full sm:scale-[100%] scale-[90%]'>
                    <h1 className='text-xl text-white sm:scale-[100%] scale-[90%]'>GetItNow</h1>
                </div>
                <div className="flex flex-row">
                    <div className='flex sm:gap-2 sm:px-6 py-2 '>
                        <input type="text" className='border lg:w-[500px] md:w-[300px] w-[70px] py-2' value={searchQuery} onChange={handleSearch} />
                        <div className='bg-amber-100 hover:bg-amber-200 cursor-pointer hover:transition ease-in-out flex items-center px-4'>
                            {/* <Link to={`/searched/${searchedName}`}> */}
                                <FontAwesomeIcon icon={faSearch} />
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className='flex items-center sm:gap-10 gap-2 sm:px-6 px-2 py-2'>
                        <div className='relative sm:scale-[100%] scale-[80%]'>
                            <div className='w-[20px] h-[20px] rounded-full bg-amber-200 absolute right-[-5px] top-[-5px] text-center'>
                                <h1 className='text-xs'>{favouritesItemsLength}</h1>
                            </div>
                            <Link to='/favourites'>
                                <FontAwesomeIcon icon={faHeart} size='2xl' color='orange' />
                            </Link>
                        </div>

                        <div className='relative sm:scale-[100%] scale-[80%]'>
                            <div className='w-[20px] h-[20px] rounded-full bg-amber-200 absolute right-[-5px] top-[-5px] text-center'>
                                <h1 className='text-xs'>{cartItemsLength}</h1>
                            </div>
                            <Link to='/cart'>
                                <FontAwesomeIcon icon={faCartShopping} size='2xl' color='orange' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col border-b-2'>
                <div className='sm:w-[300px] w-full text-center py-2 bg-amber-200'>
                    <h2 className='cursor-pointer' onClick={() => handleCategory("")}>All Categories</h2>
                </div>
                <div className='flex md:gap-12 gap-4 md:px-24 px-4 py-2 bg-gray-800 text-white flex-grow'>
                    <p className='sm:text-lg text-xs cursor-pointer' onClick={() => handleCategory("electronics")} href="">Electronics</p>
                    <p className='sm:text-lg text-xs cursor-pointer' onClick={() => handleCategory("men's clothing")} href="">Men's Clothing</p>
                    <p className='sm:text-lg text-xs cursor-pointer' onClick={() => handleCategory("women's clothing")} href="">Women's Clothing</p>
                    <p className='sm:text-lg text-xs cursor-pointer' onClick={() => handleCategory("jewelery")} href="">Jewelery</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar