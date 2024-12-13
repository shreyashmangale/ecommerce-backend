import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Table } from 'antd';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://ecommerce-backend-6egm.onrender.com/cart');
      // const items =  response;
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const items = await response.json();
      // console.log("items are ", items);
      setCartItems(items);
      // console.log(movies);

      // Optionally clear form fields after submission

    } catch (error) {
      //console.log(error);

    }
  }
  useEffect(() => {

    fetchData();
  }, [])

  const columns = [
    {
      title: 'Title',
      key: 'title',
      className: 'text-xs',
      render: (_, item) => (
        <div className='flex items-center justify-start'>
          <div className='sm:w-[100px] w-[40px] sm:h-[100px] h-[50px] sm:p-2 flex items-center'>
            <img className='sm:w-full w-[100%] sm:h-full h-full' src={item.image} alt="image" />
          </div>
          <div className='sm:w-[300px] w-[60px] h-[100px] flex items-center justify-start'>

            <h1 className='lg:ps-8 ps-0 md:text-sm text-xs'>{item.title}</h1>
          </div>
        </div>
      ),

    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      className: 'text-xs',
      render: (_, item) => (
        <div className='sm:w-full w-[40px]'>
          {item.price}
        </div>
    ),
    },
    {
      title: 'Total',
      key: 'total',
      className: 'text-xs',
      render: (_, item) => (
        <h1 className='sm:text-lg text-xs sm:w-full w-[40px]'>{(item.price).toFixed(2)}</h1>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      className: 'text-xs',
      render: (_, item) => (
        <div className='sm:w-full w-[30px]'>
          <button className='sm:text-lg text-xs text-red-500' ><FontAwesomeIcon icon={faRemove} color='red' /></button>
        </div>
      ),
    },
  ];




  return (
    <div>
      <div className="background header sm:w-full h-[180px] bg-red-500 flex justify-center items-center">
        <h1 className='text-4xl text-white'>Shopping Cart</h1>
      </div>
      <div className='flex justify-between mb-8 lg:mx-36 bg-gray-50 py-2 sm:px-28 px-2 border-b-2'>
        <div className='flex py-2 text-gray-400'>
          <h2>
            Home {'>'}
          </h2>
          <Link to={'/products'} >
            <h2>
              Products {'>'}
            </h2>
          </Link>
          <h2>
            Shopping Cart
          </h2>
        </div>
      </div>

      <div test-id="cartItem" className='lg:mx-36 mx-2 flex lg:flex-row flex-col'>
        <div className='flex-grow'>
          <Table dataSource={cartItems} columns={columns} />
        </div>


        <div className='lg:mx-[20px] mx-auto sm:mt-0 mt-12 py-[20px] px-[30px] w-[400px] h-[400px] bg-gray-100 rounded-sm'>
          <h1>Cart Total</h1>
          <hr className='mt-2' />
          <div className='flex justify-between mt-4'>
            <h1>SubTotal</h1>
            <h1>$ {cartItems.reduce((acc, item) => {
              acc += (item.price);
              return acc;
            }, 0).toFixed(2)}</h1>
          </div>
          <hr className='mt-2' />
          <div className='flex justify-between mt-4'>
            <h1>Discount</h1>
            <h1>$ 0</h1>
          </div>
          <hr className='mt-2' />
          <div className='flex justify-between mt-4'>
            <h1>Shipping Charges</h1>
            <h1>$ 0</h1>
          </div>
          <hr className='mt-2' />
          <div className='flex justify-between mt-12'>
            <h1>Total</h1>
            <h1>$ {cartItems.reduce((acc, item) => {
              acc += (item.price);
              return acc;
            }, 0).toFixed(2)}</h1>
          </div>

          <button className='w-full mt-5 lg:px-4 py-2 bg-amber-500 rounded-lg'>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart