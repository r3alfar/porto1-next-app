'use client'
import Link from "next/link"
import NavLink from "./Navlink"
import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"
import style from './Navbar.module.css'

const navLinks = [
  {
    title: 'About',
    path: '#about'
  },
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Post',
    path: '/admin'
  }
]

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <header className={style.header}>
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#DAE7F1] dark:bg-black bg-opacity-90">
          <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href='/' className="text-2xl md:text-4xl font-semibold">
              LOGO
            </Link>
            <div className="mobile-menu block md:hidden">
              {
                !navbarOpen? (
                  <button onClick={() => setNavbarOpen(true)} className="text-slate-200 flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white">
                    <Bars3Icon className="h-5 w-5"/>
                  </button>
                )
                  : (
                    <button onClick={() => setNavbarOpen(false)} className="text-slate-200 flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white">
                      <XMarkIcon className="h-5 w-5"/>
                    </button>
                  )
              }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
              <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {
                  navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title}/>
                    </li>
                  ))
                }
              </ul>
            </div>

          </div>
          {navbarOpen? <MenuOverlay links={navLinks}/> : null}
        </nav>
      </header>
    </>
    
    
  )
}

export default Navbar