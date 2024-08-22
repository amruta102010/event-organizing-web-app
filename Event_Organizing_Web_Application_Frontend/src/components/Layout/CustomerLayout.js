import React from 'react';
import Sidebar from '../Shared/Sidebar';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Logout from '../Shared/Logout';

const CustomerLayout = ({ children }) => {
  const links = [
    { name: 'Dashboard', path: '/customer/dashboard' },
    { name: 'Book Event', path: '/customer/book-event' },
    { name: 'Booking History', path: '/customer/booking-history' },
    { name: 'Profile', path: '/customer/profile' },
    { name: 'Logout', component: Logout },
  ];

  return (
    <div className="flex">
      <Sidebar links={links} />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerLayout;
