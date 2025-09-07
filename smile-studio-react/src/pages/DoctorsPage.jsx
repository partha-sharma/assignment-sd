
import React, { useState } from 'react';
import { doctors } from '../data/doctors'; 

// Define this outside the component, since it doesn't need to change.
const DOCTORS_PER_PAGE = 6;

function DoctorsPage() {
  // We only need ONE piece of state: the current page number.
  const [currentPage, setCurrentPage] = useState(1);
  console.log('Doctors data:', doctors); 

  // --- CALCULATIONS ---
  // Let's calculate which doctors to show based on the currentPage.
  // This logic is the core of pagination.

  // 1. Find the starting index. For page 1, this is 0. For page 2, it's 6.
  const startIndex = (currentPage - 1) * DOCTORS_PER_PAGE;
  
  // 2. Find the ending index. For page 1, this is 6. For page 2, it's 12.
  const endIndex = startIndex + DOCTORS_PER_PAGE;
  
  // 3. "Slice" the array to get just the doctors for the current page.
  const doctorsToShow = doctors.slice(startIndex, endIndex);
  
  // 4. Calculate how many total pages we need.
  const totalPages = Math.ceil(doctors.length / DOCTORS_PER_PAGE);


  return (
    <div className="flex-1 p-10">
      <h1 className="text-4xl font-bold mb-8">Our Doctors</h1>

      {/* --- RENDER THE DOCTOR CARDS --- */}
      {/* This part is just like the Services page: we map over the array. */}
      {/* But here, we map over `doctorsToShow` instead of the full list. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctorsToShow.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img 
              src={doctor.profilePictureUrl} 
              alt={doctor.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
            />
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.email}</p>
          </div>
        ))}
      </div>

      {/* --- RENDER THE PAGE NUMBER BUTTONS --- */}
      {/* A simple and clear way to create the page buttons. */}
      <div className="mt-10 flex justify-center items-center space-x-2">
        {/* We create an array from 1 to `totalPages` and map over it to create a button for each page. */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            // When a button is clicked, we just update the currentPage state.
            onClick={() => setCurrentPage(index + 1)}
            // We use a conditional class to highlight the active page.
            className={`px-4 py-2 rounded-md font-semibold ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;