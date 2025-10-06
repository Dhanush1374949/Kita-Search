import React from 'react'   
import { MdDarkMode, MdLightMode} from "react-icons/md";

import {Link} from 'react-router-dom'

import kita from '../assets/kita.png'

const Navbar = ({dark, setDark}) => {
  return (
    <div className=' flex  p-5  dark:bg-black dark:text-white bg-white text-white font-bold'>
        <div className='flex  justify-between items-center w-screen'>

        
        <Link to='/'>

            <img src={kita} className='w-33'></img>
          
        
        </Link>
         
        <button  type='button' onClick={()=>setDark(!dark)} className=' p-1 bg-black dark:bg-white dark:text-black rounded-4xl cursor-pointer ml-4'>{dark?<MdLightMode/>:<MdDarkMode/>}</button>
        </div>
    </div>
  )
}

export default Navbar




