// src/pages/BirthdaysPage.js
import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import Modal from '../components/Shared/Modal/ZoomImageModal';

// Array of image paths
const images = [
  '/assets/images/birthdays/birthday1.avif',
  '/assets/images/birthdays/birthday2.jpg',
  '/assets/images/birthdays/birthday3.jpg',
  '/assets/images/birthdays/birthday4.webp',
  '/assets/images/birthdays/birthday5.avif',
  '/assets/images/birthdays/birthday6.avif',
  '/assets/images/birthdays/birthday7.avif',
  '/assets/images/birthdays/birthday8.webp',
  '/assets/images/birthdays/birthday9.jpg',
  '/assets/images/birthdays/birthday10.avif',
  '/assets/images/birthdays/birthday11.webp',
  '/assets/images/birthdays/birthday12.avif',
];

const BirthdaysPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <div className="flex flex-wrap -mx-2 mb-16">
          {images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="relative w-full h-64 sm:h-80 md:h-96 cursor-pointer">
                <img
                  src={image}
                  alt={`Birthday ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => handleImageClick(image)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-blue-500 text-white text-2xl py-4 px-8 rounded-md shadow-lg hover:bg-blue-600">
            BookEvent
          </Button>
        </div>
      </main>
      <Footer />
      {/* Include the Modal component here */}
      <Modal image={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default BirthdaysPage;
