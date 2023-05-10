import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {IoIosContact} from 'react-icons/io'
import {MdCastForEducation} from 'react-icons/md'
import "./navbar.css"
import { useState } from 'react'


const Navbar = () => {
  const [navbar ,setNavbar] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>setNavbar("#")} className={navbar === '#' ? 'active' : ""}  ><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setNavbar("#about")} className={navbar === '#about' ? 'active' : ""}><AiOutlineUser /></a>
      <a href="#education" onClick={()=>setNavbar("#education")} className={navbar === '#education' ? 'active' : ""}><MdCastForEducation /></a>
      <a href="#skills" onClick={()=>setNavbar("#skills")} className={navbar === '#skills' ? 'active' : ""}><BiBook /></a>
      <a href="#contact" onClick={()=>setNavbar("#contact")} className={navbar === '#contact' ? 'active' : ""}><IoIosContact /></a>
    </nav>
  )
}

export default Navbar
