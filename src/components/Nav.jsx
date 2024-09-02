import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { CiMenuBurger } from 'react-icons/ci';
const Nav = () => {
   const [sticky, setSticky] = useState(false)
   const [menu, setMenu] = useState(false)
   useEffect(()=>{
      const handleScroll = () =>{
         if(window.scrollY > 70){
            setSticky(true)
         }
         else{
            setSticky(false)
         }
      }
      window.addEventListener('scroll', handleScroll)
      return () =>{
         window.removeEventListener('scroll', handleScroll)
      }
   },[])

   const handleMenu = () =>{
      setMenu(!menu)      
   }
   return (
      <nav className={` z-10 absolute top-0 left-0 right-0 ${sticky ? 'sticky top-0 left-0 right-0 bg-gradient-to-r from-sky-50 via-amber-50 to-pink-50 duration-700 shadow-[7px_0px_5px_0Px] shadow-blue-200' : 'bg-transparent duration-700'}`}>
         <div className={`flex items-center justify-between py-4 px-3 max-w-7xl mx-auto`}>
         <div className='flex items-center space-x-2'>
            <img src={logo} alt="logo" className='w-16'/>
            <h2 className='font-semibold text-4xl Playfair secondary_color'>Healthy</h2>
         </div>
         <ul className='space-x-6 font-semibold text-gray-700 flex-col hidden md:block'>
            <NavLink className="hover:border-b-2 border-blue-500">Home</NavLink>
            <NavLink className="hover:border-b-2 border-blue-500">Page</NavLink>
            <NavLink className="hover:border-b-2 border-blue-500">Doctor</NavLink>
            <NavLink className="hover:border-b-2 border-blue-500">Blog</NavLink>
            <NavLink className="hover:border-b-2 border-blue-500">Shop</NavLink>
         </ul>
         <button className="btn hidden md:block">Free Consultation</button>

         <ul className={`*:block font-semibold text-gray-700 flex-col md:hidden block absolute bg-gradient-to-r from-violet-100 to-blue-200 left-0 top-[82px] h-screen pl-6 pr-24 *:pt-5   duration-700 ${menu ? 'top-[82px]' : '-top-[100vh]'}`}>
            <NavLink>Home</NavLink>
            <NavLink>Page</NavLink>
            <NavLink>Doctor</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Shop</NavLink>
         </ul>
         <span onClick={handleMenu} className='md:hidden text-3xl cursor-pointer '>
            {
               menu ? <IoCloseOutline className='active:scale-0 duration-500'/> : <CiMenuBurger />
            }
            
            </span>
      </div>
      </nav>
   );
};

export default Nav;