
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
                     <select className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring ">
                        <option value="Medicine">Chose Department</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Orthopedics">Orthopedics</option>
                     </select>
                  </div>

                  <div>
                     <select className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring ">
                        <option value="Medicine">Chose Doctor</option>
                        <option value="Neurologist">Dr. Arman khan</option>
                        <option value="Orthopedics">Dr. Shahzoda</option>
                        <option value="Orthopedics">Dr. Ali Hosen</option>
                        <option value="Orthopedics">Dr. Jahana</option>
                        <option value="Orthopedics">Dr. Fatema</option>
                        <option value="Orthopedics">Dr. Ali Ahmed</option>
                     </select>
                  </div>

                  <div>
                     <input id="password" type="password" placeholder="Enter Your Name" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>

                  <div>
                     <input id="passwordConfirmation" type="password" placeholder="Enter Your Email" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                  </div>
                  
               </div>
               <div className="grid sm:grid-cols-3 mt-6 gap-6 ">
                     <input id="passwordConfirmation" type="password" placeholder="Phone Number" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                     <input id="passwordConfirmation" type="date" placeholder="Enter Your Email" className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                     <input id="passwordConfirmation" type="time" placeholder="Select time"  className="block w-full px-4 py-2.5 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                  </div>
                  <button className="bg-[#2BA7FF] text-white mt-6 w-full py-2.5 rounded-md text-lg hover:bg-blue-500">Book Appointment Now</button>


            </form>
         </div>
      </div>
   );
};

export default Appointment;