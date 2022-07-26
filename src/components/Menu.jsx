import React, { useState } from 'react'
import { data } from '../data/menu'
import MenuCard from './MenuCard'

const Menu = () => {

    const [ menu, setMenu ] = useState(data)

    const filterType = (category) => {
        setMenu(
            data.filter( food => {
                return food.category === category
            })
        )
    }

    const filterPrice = (price) => {
        setMenu(
            data.filter( food => {
                return food.price === price;
            })
        )
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-400 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/**Filter row */}

            <div className='flex flex-col lg:flex-row justify-between'>

                {/**Filter type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Category</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setMenu(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>All</button>
                        <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>Burger</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>Salad</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>Chicken</button>
                    </div>
                </div>

                {/**Filter price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>$</button>
                        <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-500'>$$$$</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    { menu.map( (food, index) => {
                       return <MenuCard food={food} key={index} />
                    }) }
            </div>
        </div>
    )
}

export default Menu