import React from 'react'
import Link, { } from "next/link";

const Footer = () => {
  return (
    <footer
      className='bg-white border-t border-border '
    >
      <div
        className=' container-custom grid grid-cols-1 md:grid-cols-3 gap-10 py-16'
      >
        {/* company inforamtation */}

        <div
        >
          <h1
            className=' text-2xl font-bold text-primary'
          >
            Milton Brush Ware
          </h1>
          <p className="paragraph mt-4">
            Manufacturing high-quality industrial and commercial brushes
            with trust, durability, and precision.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link href="/" className="paragraph hover:text-primary transition">
              Home
            </Link>

            <Link href="/about" className="paragraph hover:text-primary transition">
              About
            </Link>

            <Link href="/products" className="paragraph hover:text-primary transition">
              Products
            </Link>

            <Link href="/gallery" className="paragraph hover:text-primary transition">
              Gallery
            </Link>

            <Link href="/contact" className="paragraph hover:text-primary transition">
              Contact
            </Link>

          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Contact Info
          </h3>

          <div className="flex flex-col gap-3">

            <p className="paragraph">
              Kanpur, Uttar Pradesh, India
            </p>

            <p className="paragraph">
              +91 9876543210
            </p>

            <p className="paragraph">
              miltonbrushware@gmail.com
            </p>

          </div>
        </div>
      </div>

      {/* bottom footer */}

      <div
        className='border-t border-border'
      >
        <div
          className=' contain-custom py-5 text-center'
        >
          <p className="text-sm text-gray-500">
            © 2026 Milton Brush Ware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer