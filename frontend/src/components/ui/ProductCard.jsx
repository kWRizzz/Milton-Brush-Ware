import React from 'react'
import Image from 'next/image';


const ProductCard = ({
  images,
  title,
  description
}) => {
  return (
    <div
      className=' bg-white border border-border shadow-xl rounded-2xl transition duration-300  overflow-hidden hover:shadow-2xl p-5'
    >

      {/* image */}
      <div
        className=' bg-cover relative rounded-2xl'
      >
        <Image
          src={images}
          title={title}
          className=' bg-cover'
          alt=' carry some images
          '
        />  
      </div>

      {/* content */}
      <div
        className=' mt-5'
      >
        <h1
          className=' font-semibold text-primary'
        >
          {title}
        </h1>


        <p
          className='paragraph'
        >
          {description}
        </p>

        <button
          className=' text-primary transition duration-300 hover:scale-105 hover:font-semibold'
        >
          Learn More......
        </button>
      </div>  

    </div>
  )
}

export default ProductCard