import { FcIdea } from 'react-icons/fc';
import faq from '../assets/faq_img.jpg'
import { useState } from 'react';
const FAQ = () => {
   const [isOpen, setIsOpen] = useState(null);
   const dataArr = [{ title: "Will I always see my own doctor?", description: 'There are many variations of the passages of the Lorem Ipsum available, but the majority have suffered.', }, { title: "What is your return policy?", description: "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.", }, { title: "Can I change my shipping address?", description: "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.", }, { title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.", },];
   const toggle = (idx) => {
      setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
   };
   return (
      <div className='bg-gradient-to-r from-yellow-50 via-green-50 to-pink-50'>
         <div className='flex items-center px-3 max-w-7xl mx-auto gap-32 py-16'>
            <div className='relative'>
               <img src={faq} alt="exp_img" className='rounded-xl max-w-sm' />
               <div className='border absolute top-1/2 -right-24 w-60 rounded-xl text-xl font-light flex items-center space-x-3 bg-white p-6'>
                  <span className='text-3xl'><FcIdea /></span>
                  <p>Ger Solutions from Our Experts</p>
               </div>
            </div>

            {/* frequently asked question. */}

            <div>
               <h3 className='text-xl ml-3 text-blue-500'>FAQ Questions</h3>
               <h1 className='secondary_color ml-2 py-5 text-3xl sm:text-5xl font-semibold Playfair'>Get Your General Answer</h1>
               <div className="rounded-lg bg-white p-3 *:mix-blend-difference flex flex-col max-w-full">

                  {dataArr.map((PerAccordion, idx) => (
                     <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                        <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between font-medium text-white outline-none">
                           <span>{PerAccordion.title}</span>
                           <span className="rounded-full p-2">
                              <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                 <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                 <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                              </svg>
                           </span>
                        </button>
                        <div className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                           <div className="overflow-hidden pr-4 text-sm">{PerAccordion.description}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
   );
};

export default FAQ;