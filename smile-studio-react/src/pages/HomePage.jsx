import React from 'react';

function HomePage() {
  
  return (
    // <!-- Main content -->




    <section className="main mt-4 mx-10">
      <div className="">
        <h2 className="text-[32px] font-bold text-black">Book An Appointment</h2>
      </div>
      
      {/* <!-- Service & Doctor Section --> */}
      <div className="service-doctor flex  gap-46 mt-6 ">
        
        {/* <!-- Service --> */}
        <div className="flex flex-col w-140">
          <label htmlFor="service" className="mb-2 text-gray-700 font-medium mx-1">Service</label>
          <select id="service" className="border-[1px] border-[#cecece] rounded-lg px-5 py-3
          bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#bbb8b8]">
            <option>Teeth Whitening</option>
            <option>Dental Cleaning</option>
            <option>Root Canal</option>
            <option>Braces Consultation</option>
          </select>
        </div>

        {/* <!-- Doctor --> */}
        <div className="flex flex-col w-140  ">
          <label htmlFor="doctor" className="mb-2 text-gray-700 font-medium mx-1">Doctor</label>
          <select id="doctor" className="border-[1px] border-[#cecece] rounded-lg px-5 py-3
          bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#bbb8b8]">
            <option>Dr. Anika Rahman</option>
            <option>Dr. Kamal Hossain</option>
            <option>Dr. Redowan Sarker</option>
            <option>Dr. Shaila Ahmed</option>
          </select>
        </div>

      </div>

      {/* <!-- Calendar Section --> */}
      <div className="calendar mt-6 p-6 bg-white rounded-xl shadow-md ">

        {/* <!-- Month --> */}
        <div className="flex items-center justify-between mb-4">
            <button className="px-2 py-1 text-gray-600 hover:text-black">{'<'}</button>
            <h3 className="text-2xl font-bold text-gray-800">July 2024</h3>
            <button className="px-2 py-1 text-gray-600 hover:text-black">{'>'}</button>
        </div>

        {/* <!-- Week --> */}
        <div className="grid grid-cols-7 gap-x-1 font-medium text-gray-600 mb-2 text-center">
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
        </div>

        {/* <!-- Dates --> */}
        <div className="grid grid-cols-7 text-center gap-y-1 mx-15 gap-x-33">
            <div></div>
            <div></div>

            {/* <!-- Dates --> */}
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">1</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">2</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">3</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">4</button>                    
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">5</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">6</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">7</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">8</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">9</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">10</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">11</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">12</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">13</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">14</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">15</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">16</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">17</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">18</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">19</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">20</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">21</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">22</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">23</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">24</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">25</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">26</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">27</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">28</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">29</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">30</button>
            <button className="w-10 h-10 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">31</button>
        </div>
      </div>

      <section className="available-section">
        {/* <!-- Available Times Section --> */}
        <div className="available-times mt-5">
        
          {/* <!-- Title --> */}
          <h3 className="text-xl font-semibold text-gray-800">
              Available Times on July 5, 2024
          </h3>

          {/* <!-- Time Slots --> */}
          <div className="grid grid-cols-6 gap-3 mt-3 ">
              {/* <!-- Active slots --> */}
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              9:00 AM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              9:30 AM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              10:00 AM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              10:30 AM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              11:00 AM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              11:30 AM
              </button>
              
              {/* <!-- off --> */}
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-400 bg-gray-100 shadow cursor-not-allowed" >
              12:00 PM
              </button>

              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              12:30 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              1:00 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              1:30 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              2:00 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              2:30 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              3:00 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              3:30 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              4:00 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              4:30 PM
              </button>
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-700 bg-white shadow hover:bg-blue-500 hover:text-white">
              5:00 PM
              </button>

              {/* <!-- off --> */}
              <button className="px-4 py-2 rounded-lg border-[1px] border-[#cecece] text-gray-400 bg-gray-100 shadow cursor-not-allowed" >
              5:30 PM
              </button>
          </div>

          {/* <!-- Confirm Button --> */}
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-3 bg-blue-500 text-white hover:text-white font-medium 
                              rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 ease-in-out">
                Confirm Booking
            </button>
          </div>

        </div>
      </section>
    </section>
   
  );
}

export default HomePage;