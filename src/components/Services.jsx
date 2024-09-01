import { FaHeartbeat } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import { MdCallMissedOutgoing } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Services = () => {
   return (
      <div className="max-w-7xl mx-auto px-3 mb-16">
         <div className="text-center space-y-4 py-16">
            <h3 className="text-xl font-semibold original_color">Our Services</h3>
            <h1 className="text-2xl sm:text-5xl font-semibold secondary_color Playfair">Services For Your Health</h1>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="py-8 border px-6 space-y-3 hover:scale-105 duration-300 hover:bg-gradient-to-r hover:from-sky-50 hover:via-green-50 hover:to-amber-50">
               <FaHeartbeat  className="text-2xl text-red-500"/>
               <h2 className="text-2xl font-semibold secondary_color">Cardiology</h2>
               <p className="text-lg text-gray-600">Phasellus pellentesque ligula eget magna tristique.</p>
               <Link className="font-semibold text-blue-500 hover:border-b-2 border-blue-500">Explore Now</Link>
            </div>
            <div className="py-8 border px-6 space-y-3 hover:scale-105 duration-300 hover:bg-gradient-to-r hover:from-sky-50 hover:via-green-50 hover:to-amber-50">
               <HiShieldCheck className="text-2xl text-blue-500"/>
               <h2 className="text-2xl font-semibold secondary_color">Monthly Checkup</h2>
               <p className="text-lg text-gray-600">Phasellus pellentesque ligula eget magna tristique.</p>
               <Link className="font-semibold text-blue-500 hover:border-b-2 border-blue-500">Explore Now</Link>
            </div>
            <div className="py-8 border px-6 space-y-3 hover:scale-105 duration-300 hover:bg-gradient-to-r hover:from-sky-50 hover:via-green-50 hover:to-amber-50">
               <PiBagFill className="text-2xl text-green-500"/>
               <h2 className="text-2xl font-semibold secondary_color">Dental Care</h2>
               <p className="text-lg text-gray-600">Phasellus pellentesque ligula eget magna tristique.</p>
               <Link className="font-semibold text-blue-500 hover:border-b-2 border-blue-500">Explore Now</Link>
            </div>
            <div className="py-8 border px-6 space-y-3 hover:scale-105 duration-300 hover:bg-gradient-to-r hover:from-sky-50 hover:via-green-50 hover:to-amber-50">
               <MdCallMissedOutgoing  className="text-2xl text-red-500"/>
               <h2 className="text-2xl font-semibold secondary_color">Opthalmology</h2>
               <p className="text-lg text-gray-600">Phasellus pellentesque ligula eget magna tristique.</p>
               <Link className="font-semibold text-blue-500 hover:border-b-2 border-blue-500">Explore Now</Link>
            </div>
         </div>
      </div>
   );
};

export default Services;