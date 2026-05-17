import React from 'react'

const ContactCTA = () => {
  return (
    <section
      className=' section-padding bg-white'
    >

      <div
        className=' container-custom '
      >

        <div
          className=' bg-primary rounded-3xl px-8 py-20 text-center text-white'
        >

          <p
            className=' text-gray-300 mb-4 uppercase tracking-widest font-semibold'
          >
            Industrial Solutions
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Custom Industrial Brush Solutions?
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-8 mb-10">
            We manufacture high-quality industrial brushes tailored
            to your business requirements with precision engineering
            and long-lasting durability.
          </p>


          {/* buttons */}
            <div
              className=' flex flex-wrap justify-center gap-3'
            >
                <button
                  className=' bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition '
                >
                    Contact-Sales
                </button>
                <button
                  className='border border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-primary transition '
                >
                    View-product
                </button>


            </div>
        </div>
      </div>

    </section>
  )
}

export default ContactCTA