import React from 'react'
import { categories } from '../data/menu'
import CategoryCard from './CategoryCard'

const Category = () => {

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {
                    categories.map(( category,index) => {
                       return  <CategoryCard key={index} category={category} />
                    })
                }
            </div>
        </div>
    )
}

export default Category