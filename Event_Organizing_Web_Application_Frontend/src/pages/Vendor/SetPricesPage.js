import React from 'react';
import SetPrices from '../../components/Vendor/SetPrices'; 
import VendorLayout from '../../components/Layout/VendorLayout';

const SetPricesPage = () => {
  return (
    <VendorLayout>
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Event Pricing Management</h1>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <SetPrices />
        </div>
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 Event Management. All rights reserved.</p>
      </footer>
    </div>
    </VendorLayout>
  );
};

export default SetPricesPage;