import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>Saba</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink'><a href='/'>Home</a></li>
          <li className='menuLink'><a href='/About'>About</a></li>
          <li className='menuLink'><a href='#projects'>Projects</a></li>
          <li className='menuLink'><a href='#skills'>Skills</a></li>
          <li className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      <AiOutlineMenu className='md:hidden' size={30} />
    
      </div>
   </div>

   

  
  );
}

export default Navbar
