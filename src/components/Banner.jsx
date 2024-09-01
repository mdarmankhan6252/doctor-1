import banner_img from '../assets/banner.png'
const Banner = () => {
   return (
      <div className='bg-gradient-to-r from-cyan-50 to-blue-50 pt-24'>
         <div className='flex items-center justify-between px-3 max-w-7xl mx-auto'>
            <div className='space-y-12 mr-10'>
               <span className="text-4xl sm:text-6xl md:text-7xl font font-bold secondary_color">Your Health Is Our Top Priority</span>
               <p className='leading-8 text-[20px] text-[#969090]'>There are many variations of passages of Ipsum available,
                  but the majority have suffered</p>
               <button className="btn">Meet Our Specialist</button>
               <div className='py flex items-center space-x-12'>
                  <div className='text-center'>
                     <h1 className='text-5xl pb-2 Playfair secondary_color'>262 k+</h1>
                     <span className='text-[15px] text-gray-500'>Recovered Patients</span>
                  </div>
                  <div className='text-center'>
                     <h1 className='text-5xl pb-2 Playfair secondary_color'>94%</h1>
                     <span className='text-[15px] text-gray-500'>Satisfaction Rate</span>
                  </div>
                  <div className='text-center'>
                     <h1 className='text-5xl pb-2 Playfair secondary_color'>78 +</h1>
                     <span className='text-[15px] text-gray-500'>Expert Doctors</span>
                  </div>
               </div>
            </div>
            <div>
               <img src={banner_img} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Banner;