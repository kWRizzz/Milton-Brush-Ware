"use client";

import Link from "next/link";
import React, { useState } from 'react'
import { Menu,X } from "lucide-react";

const navLinks= [
  {
    name:"home",
    path:"/"
  },
  {
    name:"about",
    path:"/about"
  },
  {
    name:"contact",
    path:"/contact"
  },
  {
    name:"product",
    path:"/product"
  },
  {
    name:"gallery",
    path:"/gallery"
  }
]



const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className="w-full border-b border-border bg-white"
    >
      <div
        className="container-custom h-20 flex justify-between items-center"
      >   

          {/* Logo */}
          <Link
            href="/"
            className=" text-2xl font-bold text-primary"
          >
            Milton-Brush-Ware
          </Link>
          
          {/* Desktop Nav */}
          <nav
            className=" hidden md:flex items-center gap-8"
          >
            {
              navLinks.map((link)=>(
                <Link
                  key={link.name}
                  href={link.path}
                  className="  text-sm font-medium text-gray-700 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))
            }
          </nav>

            {/* button */}
            <button
              className=" hidden md:block bg-primary text-white px-5 py-3 rounded-md text-sm transition  hover:bg-secondary font-medium"
            >
              Request Quote
            </button>

            {/* Mobile Menu Button */}

            <button
              className="md:hidden"
              onClick={()=>setIsOpen(!isOpen)}
            >
              {
                isOpen ? <X/> : <Menu/>
              }
            </button>
      </div>

      {/* mobile */}

      {
        isOpen && (
          <div
            className="md:hidden border-t border-border bg-white"
          >
            <div
              className="container-custom py-5 flex flex-col gap-5"
            >
              {
                navLinks.map((link)=>(
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-sm font-medium text-gray-700"
                    onClick={()=>setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))
              }

              <button
                className=" bg-primary text-white py-3 rounded-md text-sm font-medium"
              >
                Request Call
              </button>
            </div>
          </div>
        )
      }
    </header>
  )
}

export default NavBar