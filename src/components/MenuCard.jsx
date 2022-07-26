import React from 'react'

const MenuCard = ({food}) => {
    return (
        <div className='border rounded-lg shadow-lg transition-all duration-300 hover:scale-105'>
            <img src={food.image} alt={food.name} className="w-full h-[200px] object-cover rounded-t-lg " />
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{food.name}</p>
                <p className='bg-orange-600 text-white p-1 rounded-full'><span> {food.price} </span></p>
            </div>
        </div>
    )
}

export default MenuCard