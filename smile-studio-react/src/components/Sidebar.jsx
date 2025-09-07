import React from 'react';

function Sidebar() {
  return (
    // <!-- Sidebar -->
    <div className="w-80 h-full shadow-xl flex flex-col bg-white ">
      <div className="px-5 py-3">
        <h1 className="text-[32px] font-bold text-gray-800 mt-1 block">Smile Studio</h1>
      </div>

      <nav className="flex-1 mt-4 ">
        <ul className="">
          
             <li className="px-3 py-1 ">
            <a href="services.html" className="block rounded-xl px-2 py-2 font-semibold text-[18px]
             hover:bg-gray-200 text-[#9b9a9a] hover:text-[#0f0f0f] transition-colors duration-300 ease-in-out">
             <i className="fa-solid fa-house"></i> <span className="m-1"></span> Home</a>
          </li>
          
          
              <li className="px-3 py-1 ">
            <a href="services.html" className="block rounded-xl px-2 py-2 font-semibold text-[18px]
             hover:bg-gray-200 text-[#9b9a9a] hover:text-[#0f0f0f] transition-colors duration-300 ease-in-out">
             <i className="fa-solid fa-tooth"></i> <span className="m-1"></span> Services</a>
          </li>
          
           <li className="px-3 py-1 ">
            <a href="services.html" className="block rounded-xl px-2 py-2 font-semibold text-[18px]
             hover:bg-gray-200 text-[#9b9a9a] hover:text-[#0f0f0f] transition-colors duration-300 ease-in-out">
             <i className="fa-solid fa-user-doctor"></i> <span className="m-1"></span> Doctors</a>
          </li>

              <li className="px-3 py-1 ">
            <a href="services.html" className="block rounded-xl px-2 py-2 font-semibold text-[18px]
             hover:bg-gray-200 text-[#9b9a9a] hover:text-[#0f0f0f] transition-colors duration-300 ease-in-out">
             <i className="fa-solid fa-star"></i><span className="m-1"></span> Reviews</a>
          </li>
          
          
              <li className="px-3 py-1 ">
            <a href="services.html" className="block rounded-xl px-2 py-2 font-semibold text-[18px]
             hover:bg-gray-200 text-[#9b9a9a] hover:text-[#0f0f0f] transition-colors duration-300 ease-in-out">
             <i className="fa-solid fa-phone"></i> <span className="m-1"></span> Contact</a>
          </li>
          
        </ul>
      </nav>

      <div className="p-3 hover:bg-gray-200 rounded-xl my-3 mx-3">
        <a href="#" className="block pr-25 font-medium text-lg text-[#9b9a9a] hover:text-[#0f0f0f]"><i className="fa-solid fa-user"></i><span className="m-1"> </span>Profile</a>
      </div>
    </div>
  );
}

export default Sidebar;