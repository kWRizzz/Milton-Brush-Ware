import React from 'react'
import facImg from "../../assets/factory/fac1.jpg"
import Image from 'next/image'
const AboutSection = () => {

  const stats = [
    {
      number: "20+",
      label: "Years Experience",
    },
    {
      number: "500+",
      label: "Industrial Clients",
    },
    {
      number: "1000+",
      label: "Products Delivered",
    },
  ]

  return (

    <section
      className=' section-padding bg-white'
    >

      <div
        className=' custom-container grid grid-cols-1 lg:grid-cols-2  gap-16 items-center'
      >

        {/* left */}
        <div
          className=' relative w-full h-[500px]'
        >
          <Image
            alt='fact img'
            src={facImg}
            fill
            className=' object-cover rounded-2xl'
          />
        </div>

        {/* right */}

        <div
          className=''
        >
          <p
            className=' text-primary  uppercase  tracking-widest text-sm font-semibold mb-3 '
          >
            About Company
          </p>
          <h2 className="heading-secondary mb-6">
            Manufacturing Industrial Brushes With Precision
          </h2>

          <p className="paragraph mb-6">
            Milton Brush Ware specializes in manufacturing
            high-quality industrial brushes engineered for
            commercial and industrial applications.
          </p>

          <p className="paragraph mb-10">
            Our focus on durability, customization, and precision
            manufacturing has helped businesses achieve reliable
            industrial performance and long-lasting solutions.
          </p>


          {/* stats */}
          <div
            className=' grid grid-cols-1 sm:grid-cols-3 gap-8'
          >
            {
              stats.map((item,index)=>(
                <div
                  key={index}
                  
                >
                  <h3
                    className=' text-3xl font-bold text-primary'
                  >
                    {item.number}
                  </h3>

                  <p
                    className='paragraph'
                  >
                    {item.label}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutSection