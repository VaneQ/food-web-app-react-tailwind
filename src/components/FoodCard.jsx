import React from 'react'

const FoodCard = ({food}) => {

    return (
    
        <div className='rounded-xl relative'>
                {/**overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>{ food.title }</p>
                <p className='px-2'> { food.slogan } </p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 transition-all duration-500 hover:bg-black hover:text-white hover:border-black'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={food.img} alt="card"/>
        </div>
  )
}

export default FoodCard