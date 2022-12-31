import React from 'react'
import "./nav.css"
import{FaHome} from "react-icons/fa"
import{FiUser} from "react-icons/fi"
import{BsBook} from "react-icons/bs"
import{RiServiceFill} from "react-icons/ri"
import{BiMessageDots} from "react-icons/bi"
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav]=useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav("#")}} className={activeNav === "#about"  ? "active ":""}> <FaHome /></a>
      <a href="#about"  onClick={()=>{setActiveNav("#about")}} className={activeNav === "#about"  ? "active ":""}> <FiUser/></a>
      <a href="#experence" onClick={()=>{setActiveNav("#experence")}} className={activeNav === "#experence"  ? "active ":""} > <BsBook/></a>
      <a href="#service" onClick={()=>{setActiveNav("#service")}} className={activeNav === "#service"  ? "active ":""} > <RiServiceFill/></a>
      <a href="#contact" onClick={()=>{setActiveNav("#contact")}} className={activeNav === "#contact"  ? "active ":""} > <BiMessageDots/></a>
    </nav>
  )
}

export default Nav  