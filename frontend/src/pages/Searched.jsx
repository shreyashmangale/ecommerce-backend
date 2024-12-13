import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { products } from '../searchdata/db.js'
import { useSearch } from '../context/searchContext.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';


const Searched = () => {
    const { searchQuery, setSearchQuery } = useSearch();

    const location = useLocation();

    const [cartItemsLength, setCartItemsLength] = useState(0);
    const [favouritesItemsLength, setFavouritesItemsLength] = useState(0);


    const [searchedName, setSearchedName] = useState(searchQuery);
    const [loading, setLoading] = useState(false);
    const [searchedItem, setSearchedItem] = useState([]);

    //console.log(searchedName)

    const handleSearchedName = () => {
        setSearchedName(searchQuery);
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://ecommerce-backend-6egm.onrender.com/search?searchedName=${searchedName}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                // console.log(result);


                if (result) { // only set data if component is mounted
                    setSearchedItem(result);
                    setLoading(false);

                }
            } catch (error) {
                //console.log(error);
            }
        };

        fetchData();

        handleSearchedName();

    }, [searchQuery])


    useEffect(() => {
        async function fetchDataLength() {
            try {
                const cartResponse = await fetch('https://ecommerce-backend-6egm.onrender.com/cart/cart-length');
                const favouritesResponse = await fetch('https://ecommerce-backend-6egm.onrender.com/favourites/favourites-length');

                if (!cartResponse.ok && !favouritesResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const cartItems = await cartResponse.json();
                const favouritesItems = await favouritesResponse.json();
                setCartItemsLength(cartItems.cartLength);
                setFavouritesItemsLength(favouritesItems.favouritesLength);


            } catch (error) {
                //console.log(error);
            }
        }

        fetchDataLength();
    }, [])


    const displayToast = (state, store) => {
        if (state === 'success') {
            return (
                toast.success(`Successfully added to ${store}!`)
            )
        }
        else {
            return (
                toast.error(`Already added to ${store}`)
            )
        }
    };


    const addToFavourites = async (item) => {
        // e.preventDefault();

        const newItem = item;
        // console.log(newItem);

        try {
            const response = await axios.post('https://ecommerce-backend-6egm.onrender.com/api/favourites', newItem);
            if (response.status === 200) {
                //console.log(response.data);
                displayToast('success', 'favourites');
            }


        } catch (error) {
            if (error.status === 409) {
                //console.log("Already added to favourites");
                displayToast('error', 'favourites');
            }

        }
    };

    const addToCart = async (item) => {
        // e.preventDefault();

        const newItem = item;
        // console.log(newItem);

        try {
            const response = await axios.post('https://ecommerce-backend-6egm.onrender.com/api/cart', newItem);
            if (response.status === 200) {
                //console.log(response.data);
                displayToast('success', 'cart');
            }

        } catch (error) {
            if (error.status === 409) {
                //console.log("Already added to cart");
                displayToast('error', 'cart')
            }
        }
    };

    return (
        <div>
            <Navbar cartItemsLength={cartItemsLength} favouritesItemsLength={favouritesItemsLength}/>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <div className='w-full h-[max-content] sm:mt-40 mt-44'>
                {
                    searchedItem.length ?
                        <ul className='bg-gray-100 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-fit sm:px-32 md:px-16 px-2 gap-4 pt-8 pb-12'> {searchedItem.map(item => <div key={item.id} className="w-full h-fit flex flex-col justify-between items-center bg-white border-2 rounded-lg sm:px-2 px-1 sm:py-4 py-2 mx-auto">
                            <div className=''>
                                <Link className="link" to={`/singlepage/${item.id}`}>
                                    <img className='sm:h-[200px] h-[100px] sm:p-8 p-4' src={item.image} alt="" />
                                </Link>
                            </div>
                            <div className='text-center'>
                                <p className='text-gray-400 sm:text-lg text-xs'>{item.category}</p>
                                <Link className="link" to={`/singlepage/${item.id}`}>
                                    <h6 className='sm:text-lg text-xs'>{item.title.length > 30 ? item.title.slice(0, 30) : item.title}</h6>
                                </Link>
                                <h5 className='text-red-400'>$ {item.price}</h5>
                            </div>
                            <div className='sm:mt-4 mt-1 flex justify-between items-center w-full sm:px-12 px-2 sm:flex-row flex-col gap-2'>
                                <Link className="link" to={`/singlepage/${item.id}`}>
                                    <button className="bg-gray-800 px-2 py-1 sm:text-sm text-xs text-white rounded-lg">Read More</button>
                                </Link>
                                <div className='flex gap-4'>
                                    <button className="bg-gray-800 px-2 py-1 sm:text-sm text-xs text-white rounded-lg" onClick={() => addToFavourites(item)}>
                                        <FontAwesomeIcon icon={faHeart} color='orange' />
                                    </button>
                                    <button className="bg-gray-800 px-2 py-1 sm:text-sm text-xs text-white rounded-lg" onClick={() => addToCart(item)}>
                                        <FontAwesomeIcon icon={faCartShopping} color='orange' />
                                    </button>
                                </div>
                            </div>
                        </div>)}</ul>
                        :
                        <h1>Search any product</h1>
                }
            </div>

            <Footer />
        </div>
    )
}

export default Searched