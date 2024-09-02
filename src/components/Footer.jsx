import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Footer = () => {
   return (
      <div className="pt-16 pb-6 bg-gradient-to-tr from-blue-100 via-green-50 to-yellow-100">
         <div className="max-w-7xl mx-auto">
            <div className='flex items-center justify-between px-3 flex-col space-y-6'>
               <div className='flex space-x-2'>
                  <img src={logo} alt="logo" className='w-12' />
                  <h1 className='md:text-4xl text-2xl secondary_color Playfair'>Healthy</h1>
               </div>
               <ul className='space-x-6 font-light text-lg'>
                  <Link>Home</Link>
                  <Link>About Us</Link>
                  <Link>Page</Link>
                  <Link>Doctor</Link>
                  <Link>Blog</Link>
                  <Link>Shop</Link>
                  <Link>Contact</Link>
                  <Link>Home</Link>
               </ul>
            </div>
            <hr className='my-6'/>
            <p className='text-sm text-center'>All Right reserved by MD Arman khan</p>
         </div>
      </div>
   );
};

export default Footer;