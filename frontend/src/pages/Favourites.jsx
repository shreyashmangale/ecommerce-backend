import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'antd';
import { faCartShopping, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Favourites = () => {

  const [favourites, setFavourites] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://ecommerce-backend-w61s.onrender.com/favourites');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const items = await response.json();
      //console.log("items are ", items);
      setFavourites(items);


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
      align: 'center',
      render: (_, item) => (
        <div className='flex items-center justify-start'>
          <div className='sm:w-[100px] w-[40px] sm:h-[100px] h-[60px] sm:p-2 flex items-center'>
            <img className='sm:w-full w-[100%] sm:h-full h-full' src={item.image} alt="image" />
          </div>
          <div className='sm:w-[500px] md:w-[400px] sm:w-[250px] w-[60px] h-[100px] flex items-center justify-start'>

            <h1 className='lg:ps-8 ps-0 sm:text-sm text-xs'>{item.title.slice(0, 50)+ "..."}</h1>
          </div>
        </div>
      ),

    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (_, item) => (
        <div className='sm:w-full w-[30px]'>
          {item.price}
        </div>
      ),
    },

    {
      title: 'Add To Cart',
      key: 'addToCart',
      align: 'center',
      className: 'text-xs',
      render: (_, item) => (
        <div className='w-full'>
          <button className='py-2 py-1 text-xs rounded-lg' ><FontAwesomeIcon icon={faCartShopping} color='orange' /></button>
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      className: 'text-xs',
      render: (_, item) => (
        <button className='sm:text-lg text-xs text-red-500'><FontAwesomeIcon icon={faRemove} color='red' /></button>
      ),
    },
  ];



  return (
    <div>
      <div className="background header sm:w-full h-[180px] flex justify-center items-center">
        <h1 className='text-4xl text-white'>Favourites</h1>
      </div>
      <div className='flex justify-between sm:mb-8 bg-gray-50 py-2 lg:px-36 px-2 border-b-2'>
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
            Favourites
          </h2>
        </div>
      </div>

      <div className='lg:mx-36 mx-2 flex'>
        <Table dataSource={favourites} columns={columns} style={{ width: "100%" }} />
      </div>
    </div>
  )
}

export default Favourites