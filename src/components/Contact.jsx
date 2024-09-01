import { FiPhoneCall } from 'react-icons/fi';
import contact_img from '../assets/contact_img.jpg'
import chart from '../assets/chart.png'
const Contact = () => {
   return (
      <div className="bg-gradient-to-r from-green-50 to-pink-50 py-24">
         <div className='flex flex-row-reverse items-center justify-between px-3 max-w-7xl mx-auto gap-20 py-16'>
            <div className='relative'>
               <img src={contact_img} alt="exp_img" className='rounded-xl  duration-500 ' />
               <img src={chart} alt="" className='absolute -bottom-10 -left-10 rounded-md' />
            </div>
            <div className='space-y-4'>
               <h3 className='text-xl font-semibold text-blue-500'>Need Emergency?</h3>
               <h1 className='text-3xl sm:text-5xl font-semibold Playfair leading-[60px] secondary_color'>Don’t Be Hesitate To
               Contact Us</h1>
               <p className='leading-8 text-lg font-light text-[#857f7f]'>There are many variations of passages the Lorem Ipsum available, but the majority have suffered.</p>
               <div className='bg-gradient-to-r from-sky-500 to-indigo-500 py-8 px-3 flex items-center space-x-4 text-white rounded-xl hover:bg-gradient-to-r hover:from--500 hover:to-sky-500 duration-300 w-96'>
                  <div className='text-5xl'>
                  <FiPhoneCall />
                  </div>
                  <div className='space-y-1'>
                     <h3 className='text-2xl font-semibold'>For Any Emergency Cases</h3>
                     <p className='text-lg font-light'>Call Us: +00000000000</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;