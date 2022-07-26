import React from 'react'
import FoodCard from './FoodCard'
import { foods } from '../data/foods'

const Food = () => {


    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            
            {
                foods.map( (food) => {
                   return <FoodCard key={food.id} food={food} />
                })
            }
            
        </div>
    )
}

export default Food