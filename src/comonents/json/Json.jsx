import React, { useState, useEffect } from 'react'
import "./json.css"
import { LiaCartPlusSolid } from "react-icons/lia";
import axios from 'axios'
const API_URL = "https://dummyjson.com"
const Json = () => {
  
    const [products, setProducts] = useState(null)
    useEffect(() => {
        axios
            .get(`${API_URL}/products`)
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    }, [])
    console.log(products);
    const [offset, setOffset] = useState(0)
    const handClick = () => {
        setOffset(offset + 1)
    }
    const productItem = products?.map((product) => (
        <div key={product.id} className='w-72 p-3 api border flex flex-col gap-4 items-center justify-center rounded-lg shadow-md relative'>
            <img src={product.images[0]} alt="" className='w-full h-52 object-contain hover:scale-105 ' />
            <div className='flex flex-col gap-2 '>
                <h3 className='text-center text-xl font-semibold'>{product.brand}</h3>
                <p className='text-red-500 text-sm font-medium ml-2'>12%</p>
                <p className='desck'>{product.description}</p>
                <p className='text-lg font-semibold ml-2'>${product.price}</p>
            </div>
         
        </div>
    ))
 
    return (
        <div className='container mx-auto mb-16'>
            <div className='flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-5 sm:mb-10'>
                <p className='text-2xl sm:text-3xl font-bold'>Скидки <b className='text-red-600'>%</b></p>
                <p className='text-sm sm:text-base text-slate-600'>Все товары в категории</p>
            </div>

            <div className='flex gap-3 flex-wrap items-center justify-center '>
                {
                    productItem
                }
            </div>
        </div>
    )
}

export default Json