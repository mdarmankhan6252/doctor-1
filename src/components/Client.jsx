import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import user_1 from '../assets/doctor_1.png'
import user_2 from '../assets/doctor_2.png'
import user_3 from '../assets/doctor_3.png'
const Client = () => {

   const [slider, setSlider] = useState(25)

   const handleNext = () => {
      if (slider <= 25) {
         setSlider(slider + 25)
      }
   }
   const handlePre = () => {
      if (slider >= 25) {
         setSlider(slider - 25)
      }

   }
   return (
      <div className="py-24 px-3 relative max-w-7xl mx-auto">
         <button onClick={handlePre} className="absolute text-4xl border text-white bg-blue-500 active:scale-90 duration-200 rounded-full left-3 top-1/2 cursor-pointer -translate-y-1/2"><GrFormPrevious /></button>
         <button onClick={handleNext} className="absolute text-4xl border text-white bg-blue-500 active:scale-90 duration-200 rounded-full top-1/2  right-3 cursor-pointer -translate-y-1/2"><MdNavigateNext /></button>

         {/* slider */}
         <div className="sm:px-16 px-9">
            <div className="overflow-x-hidden">
               <ul style={{ transform: `translate(-${slider}%)` }} className="w-[200%] items-center justify-between flex gap-x-4 duration-500 ">
                  <li>
                     <div className="border p-4 space-y-3 bg-gradient-to-tr from-amber-50 via-green-100 to-fuchsia-50">
                        <div className="flex items-center justify-between">
                           <img src={user_1} alt="" className="w-12 border-2 border-green-400 rounded-full h-12" />
                           <div>
                              <h3 className="font-semibold text-lg">Jhon Kram</h3>
                              <span className="text-sm ">UX Designer</span>
                           </div>
                        </div>
                        <p className="text-[#878282] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
                  <li>
                     <div className="border p-4 space-y-3 bg-gradient-to-tr from-amber-50 via-green-100 to-fuchsia-50">
                        <div className="flex items-center justify-between">
                           <img src={user_2} alt="" className="w-12 border-2 border-green-400 rounded-full h-12" />
                           <div>
                              <h3 className="font-semibold text-lg">Ala Pal</h3>
                              <span className="text-sm ">UI Designer</span>
                           </div>
                        </div>
                        <p className="text-[#878282] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
                  <li>
                     <div className="border p-4 space-y-3 bg-gradient-to-tr from-amber-50 via-green-100 to-fuchsia-50">
                        <div className="flex items-center justify-between">
                           <img src={user_3} alt="" className="w-12 border-2 border-green-400 rounded-full h-12" />
                           <div>
                              <h3 className="font-semibold text-lg">Lalik Roe</h3>
                              <span className="text-sm ">Graphic</span>
                           </div>
                        </div>
                        <p className="text-[#878282] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
                  <li>
                     <div className="border p-4 space-y-3 bg-gradient-to-tr from-amber-50 via-green-100 to-fuchsia-50">
                        <div className="flex items-center justify-between">
                           <img src={user_1} alt="" className="w-12 border-2 border-green-400 rounded-full h-12" />
                           <div>
                              <h3 className="font-semibold text-lg">Olaf Kin</h3>
                              <span className="text-sm ">Developer</span>
                           </div>
                        </div>
                        <p className="text-[#878282] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Client;