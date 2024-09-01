import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import doctor_1 from '../assets/doctor_1.png'
import doctor_2 from '../assets/doctor_2.png'
import doctor_3 from '../assets/doctor_3.png'
import { FaXTwitter } from 'react-icons/fa6';
const Team = () => {
   return (
      <div className='mb-20 px-3 max-w-7xl mx-auto'>
         <div className="text-center space-y-4 pb-16">
            <h3 className="text-xl font-semibold original_color">Professional Team Members</h3>
            <h1 className="text-2xl sm:text-5xl font-semibold secondary_color Playfair">Meet Our Expert Doctors</h1>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='team text-center bg-gradient-to-tl from-yellow-100 via-indigo-100 to-green-100 pt-6 space-y-6 rounded-lg relative'>
               <h1 className='secondary_color Playfair text-2xl font-semibold'>Dr. Ahmad Stevens</h1>
               <span className='text-blue-500 font-light text-lg'>Neurologist</span>
               <div className='flex justify-center'>
                  <img src={doctor_1} alt="" />
               </div>
               <div className='absolute bottom-0 *:bg-white text-3xl *:p-1 rounded-lg left-1/2 flex space-x-4 transform -translate-x-1/2 team_icon duration-500 *:cursor-pointer *:rounded-full'>
               <FaFacebookF/>   
               <FaXTwitter />
               <FaInstagram />
               </div>
            </div>
            <div className='team text-center bg-gradient-to-tl from-yellow-100 via-indigo-100 to-green-100 pt-6 space-y-6 rounded-lg relative'>
               <h1 className='secondary_color Playfair text-2xl font-semibold'>Dr. Lesley Hull</h1>
               <span className='text-blue-500 font-light text-lg'>Medicinenpm</span>
               <div className='flex justify-center'>
                  <img src={doctor_2} alt="" />
               </div>
               <div className='absolute bottom-0 *:bg-white text-3xl *:p-1 rounded-lg left-1/2 flex space-x-4 transform -translate-x-1/2 team_icon duration-500 *:cursor-pointer *:rounded-full'>
               <FaFacebookF/>   
               <FaXTwitter />
               <FaInstagram />
               </div>
            </div>
            <div className='team text-center bg-gradient-to-tl from-yellow-100 via-indigo-100 to-green-100 pt-6 space-y-6 rounded-lg relative'>
               <h1 className='secondary_color Playfair text-2xl font-semibold'>Dr. Hunter Farley</h1>
               <span className='text-blue-500 font-light text-lg'>Orthopedics</span>
               <div className='flex justify-center'>
                  <img src={doctor_3} alt="" />
               </div>
               <div className='absolute bottom-0 *:bg-white text-3xl *:p-1 rounded-lg left-1/2 flex space-x-4 transform -translate-x-1/2 team_icon duration-500 *:cursor-pointer *:rounded-full'>
               <FaFacebookF/>   
               <FaXTwitter />
               <FaInstagram />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Team;