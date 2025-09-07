// src/data/doctors.js

// Using a placeholder service for random profile pictures
const imageUrl = (id) => `https://i.pravatar.cc/150?u=${id}`;

export const doctors = [
  { id: 1, name: "Dr. Anika Rahman", email: "anika.rahman@smile.com", profilePictureUrl: imageUrl('anika') },
  { id: 2, name: "Dr. Kamal Hossain", email: "kamal.hossain@smile.com", profilePictureUrl: imageUrl('kamal') },
  { id: 3, name: "Dr. Redowan Sarker", email: "redowan.sarker@smile.com", profilePictureUrl: imageUrl('redowan') },
  { id: 4, name: "Dr. Shaila Ahmed", email: "shaila.ahmed@smile.com", profilePictureUrl: imageUrl('shaila') },
  { id: 5, name: "Dr. Farhan Reza", email: "farhan.reza@smile.com", profilePictureUrl: imageUrl('farhan') },
  { id: 6, name: "Dr. Nusrat Jahan", email: "nusrat.jahan@smile.com", profilePictureUrl: imageUrl('nusrat') },
  { id: 7, name: "Dr. Iqbal Mahmud", email: "iqbal.mahmud@smile.com", profilePictureUrl: imageUrl('iqbal') },
  { id: 8, name: "Dr. Sharmin Akter", email: "sharmin.akter@smile.com", profilePictureUrl: imageUrl('sharmin') },
  { id: 9, name: "Dr. Jamil Khan", email: "jamil.khan@smile.com", profilePictureUrl: imageUrl('jamil') },
  { id: 10, name: "Dr. Fatema Chowdhury", email: "fatema.c@smile.com", profilePictureUrl: imageUrl('fatema') },
  { id: 11, name: "Dr. Borhan Uddin", email: "borhan.uddin@smile.com", profilePictureUrl: imageUrl('borhan') },
  { id: 12, name: "Dr. Sumaiya Islam", email: "sumaiya.islam@smile.com", profilePictureUrl: imageUrl('sumaiya') },
];