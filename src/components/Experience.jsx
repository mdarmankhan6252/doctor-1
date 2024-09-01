import exp_img from '../assets/exp_img.jpg'
const Experience = () => {
   return (
      <div className='flex items-center justify-between px-3 max-w-7xl mx-auto gap-20 py-16'>
         <div>
            <img src={exp_img} alt="exp_img" className='rounded-xl hover:rotate-6 duration-500 hover:scale-105' />            
         </div>
         <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-blue-500'>25+ Years Of Experiences</h3>
            <h1 className='text-3xl sm:text-5xl font-semibold Playfair leading-[60px] secondary_color'>We Are Always Ensure Best Medical Treatment For Your Health</h1>
            <p className='leading-8 text-lg font-light text-[#857f7f]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. We are the startup studio with a mission to partner.</p>
            <button className="btn">Know More About Us</button>
         </div>
      </div>
   );
};

export default Experience;