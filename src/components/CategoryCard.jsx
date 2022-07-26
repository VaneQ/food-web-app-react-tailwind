import React from 'react'

const CategoryCard = ({category}) => {
  return (
    <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer translate-all duration-300 hover:bg-gray-300'>
        <h2 className='font-bold sm:text-xl'>{category.name}</h2>
        <img className="w-16" src={category.image} alt="img" ></img>
    </div>
  )
}

export default CategoryCard