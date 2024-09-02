
const Appointment = () => {
   return (
      <div className="mb-16">
         <div className="text-center space-y-4 py-16">
            <h3 className="text-xl font-semibold original_color">Make An Appointment</h3>
            <h1 className="text-2xl sm:text-5xl font-semibold secondary_color Playfair">Meet With Our Experts</h1>
         </div>
         <div className="max-w-7xl mx-auto px-3">
            <form>
               <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                     <select name="department" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring ">
                        <option disabled>Chose Department</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Orthopedics">Orthopedics</option>
                     </select>
                  </div>

                  <div>
                     <select name="doctor" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring ">
                        <option disabled>Chose Doctor</option>
                        <option value="Dr. Arman khan">Dr. Arman khan</option>
                        <option value="Dr. Shahzoda">Dr. Shahzoda</option>
                        <option value="Dr. Ali Hosen">Dr. Ali Hosen</option>
                        <option value="Dr. Jahana">Dr. Jahana</option>
                        <option value="Dr. Fatema">Dr. Fatema</option>
                        <option value="Dr. Ali Ahmed">Dr. Ali Ahmed</option>
                     </select>
                  </div>

                  <div>
                     <input name="userName" type="text" placeholder="Enter Your Name" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div>
                     <input name="email" type="email" placeholder="Enter Your Email" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>
                  
               </div>
               <div className="grid sm:grid-cols-3 mt-6 gap-6 ">
                     <input name="number" type="number" placeholder="Phone Number" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                     <input name="date" type="date" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                     <input name="time" type="time" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                  </div>
                  <button className="bg-[#2BA7FF] text-white mt-6 w-full py-2.5 rounded-md text-lg hover:bg-blue-500">Book Appointment Now</button>


            </form>
         </div>
      </div>
   );
};

export default Appointment;