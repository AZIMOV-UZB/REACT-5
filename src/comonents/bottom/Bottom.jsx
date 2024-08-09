import React from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { TfiShoppingCart } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";



export const Bottom = () => {
  return (
    <div className='bottom container mx-auto px-4 items-center flex justify-between'>
  <div className='flex  gap-6 items-center'> 
    <div  className='items-center'>
      <HiMenuAlt1 className='text-2xl	' />
    </div>
    <div className='border rounded-3xl py-2 items-center bottom__bag  	justify-between	'>
      <input  className='bg-white  dark:bg-black bottom__inp ' type="text"  placeholder='Что желаете найти?'/>
    <button><IoSearch  className='text-2xl	bottom__icon'/>
    </button>
    </div>
  </div>
  <div className='flex gap-7'>
    <p className='text-orange-400 text-xl font-normal	 pp	'>Вставить список покупок</p>
    <FaRegStar className='text-2xl dn'/>
    <TfiShoppingCart  className='text-2xl bottom__icon'/>
    <CiUser className='text-2xl bottom__icon' />



  </div>
      
    </div>
  );
};


export default Bottom;
