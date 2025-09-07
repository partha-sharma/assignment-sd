import React from 'react';

// 1. DUMMY DATA: An array of objects representing our services.
// In a real app, this data would come from a database.
const services = [
  {
    id: 1,
    name: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services. Safe, effective, and fast results.',
    imageUrl: 'https://images.unsplash.com/photo-1629905675037-9c2d76523b18?q=80&w=800&auto=format&fit=crop', // Example image
  },
  {
    id: 2,
    name: 'Dental Cleaning',
    description: 'Comprehensive cleaning to remove plaque and tartar, promoting healthy gums and preventing cavities.',
    imageUrl: 'https://images.unsplash.com/photo-1588776239328-958c212a5270?q=80&w=800&auto=format&fit=crop', // Example image
  },
  {
    id: 3,
    name: 'Root Canal Therapy',
    description: 'Relieve tooth pain and save your natural tooth with our advanced root canal treatments.',
    imageUrl: 'https://images.unsplash.com/photo-1606502622723-51549a1443a1?q=80&w=800&auto=format&fit=crop', // Example image
  },
  {
    id: 4,
    name: 'Braces & Orthodontics',
    description: 'Straighten your teeth and improve your bite with modern orthodontic solutions for all ages.',
    imageUrl: 'https://images.unsplash.com/photo-1619451998722-b5e11b3f23a9?q=80&w=800&auto=format&fit=crop', // Example image
  },
  {
    id: 5,
    name: 'Dental Implants',
    description: 'A permanent solution for missing teeth that looks and feels natural. Restore your smile with confidence.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681494793444-4e2b0a51a248?q=80&w=800&auto=format&fit=crop', // Example image
  },
  {
    id: 6,
    name: 'Kids Dentistry',
    description: 'Gentle and friendly dental care for children to ensure a lifetime of healthy smiles.',
    imageUrl: 'https://images.unsplash.com/photo-1562571442-141de1e86c13?q=80&w=800&auto=format&fit=crop', // Example image
  },
];


function ServicesPage() {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      {/* 2. GRID LAYOUT: This will hold our service cards. 
             It's responsive: 1 column on small screens, 2 on medium, 3 on large. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 3. MAPPING DATA TO JSX: We loop over the `services` array.
               For each `service` object, we create a card `div`. */}
        {services.map(service => (
          // The `key` is important for React to identify each item uniquely.
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src={service.imageUrl} alt={service.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default ServicesPage;