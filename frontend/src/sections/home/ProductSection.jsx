import React from 'react'
import product1 from "../../assets/imgPublic/brush2.jpg"
import product2 from "../../assets/imgPublic/brush3.jpg"
import product3 from "../../assets/imgPublic/brush4.jpg"
import ProductCard from '@/src/components/ui/ProductCard'
const ProductSection = () => {

  const products = [
    {
      image: product1,
      title: "Industrial Roller Brush",
      description:
        "Designed for heavy-duty industrial cleaning and manufacturing applications.",
    },
    {
      image: product2,
      title: "Wire Brush",
      description:
        "Durable wire brushes suitable for polishing, cleaning, and surface treatment.",
    },
    {
      image: product3,
      title: "Strip Brush",
      description:
        "Precision strip brushes engineered for sealing and conveyor systems.",
    },
  ];
  return (
    <section
      className=' section-padding'
    >

      <div
        className='container-custom'
      >

        {/* heading */}
        <div
          className='text-center mb-16'
        >

          <p
            className=' uppercase text-primary tracking-widest text-sm font-semibold mb-3'
          >
            Our Product
          </p>


          <h2
            className='heading-secondary mb-5'
          >
            Industrial Brush Solutions
          </h2>

          <p className="paragraph max-w-2xl mx-auto">
            Explore our range of industrial brushes manufactured
            for durability, precision, and industrial performance.
          </p>
        </div>

      </div>

      {/* gird */}
      <div
        className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'
      >
        {
          products.map((product,index)=>(
            <ProductCard
              key={index}
              images={product.image}
              title={product.title}
              description={product.description}
            />
          ))
        }
      </div>

    </section>
  )
}

export default ProductSection