import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Client = () => {
   return (
      <div className="py-24 px-3 relative max-w-7xl mx-auto">
            <div className="absolute text-4xl border text-white bg-blue-500 active:scale-90 duration-200 rounded-full left-3 top-1/2 cursor-pointer -translate-y-1/2"><GrFormPrevious/></div>
            <div className="absolute text-4xl border text-white bg-blue-500 active:scale-90 duration-200 rounded-full top-1/2  right-3 cursor-pointer -translate-y-1/2"><MdNavigateNext /></div>

            {/* slider */}
            <div className="px-16">
               <ul className="I:inline">
                  <li>
                     <div className="border w-1/2 p-4 space-y-3">
                     <h2 className="font-semibold text-xl">MD Arman khan 1</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
                  <li>
                     <div className="border w-1/2 p-4 space-y-3">
                     <h2 className="font-semibold text-xl">MD Arman khan 2</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
                  <li>
                     <div className="border w-1/2 p-4 space-y-3">
                     <h2 className="font-semibold text-xl">MD Arman khan 3</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
                  <li>
                     <div className="border w-1/2 p-4 space-y-3">
                     <h2 className="font-semibold text-xl">MD Arman khan 4</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates exercitationem, commodi fugiat esse aspernatur, ea maiores aperiam quibusdam inventore veniam impedit perferendis veritatis iste earum. Non expedita perferendis laboriosam.</p>
                     </div>
                  </li>
               </ul>
            </div>         
      </div>
   );
};

export default Client;