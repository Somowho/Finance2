import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/*mx-auto sets margin left and margin-right to auto, which centers the element horizontally
      within its parents */}

      {/*px-4 means padding-left & padding-right = 16px */}

      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>4TUNE.</h1>
      <ul className='hidden md:flex'>  {/* if above medium show(flex) else hide the links */}
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>



  {/*If nav is true show close, if nav is false show menu */}
     {/*By default, nav is false so it would show menu first */}  
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
 
  {/*when you click, handleNav makes the value opposite and would alter the icon based on the logic*/}   





{/* Mobile version */}

 <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
 <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
  <li className='p-4 border-b border-gray-600'>Home</li>
   <li className='p-4 border-b border-gray-600'>Company</li>
  <li className='p-4 border-b border-gray-600'>Resources</li>
   <li className='p-4 border-b border-gray-600'>About</li>
 <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;