// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import CustomerDashboardPage from './pages/Customer/CustomerDashboardPage';
import VendorDashboardPage from './pages/Vendor/VendorDashboardPage';
import EventsPage from './pages/EventsPage';
import BirthdaysPage from './pages/BirthdaysPage';
import SeminarsPage from './pages/SeminarsPage';
import WeddingsPage from './pages/WeddingsPage';
import ConcertsPage from './pages/ConcertsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
 import ManageBooking from './components/Vendor/ManageBooking';
import PrivateRoute from './components/PrivateRoute';
import ManageEventsPage from './pages/Admin/ManageEventsPage';
import ManageCustomersPage from './pages/Admin/ManageCustomersPage';
import ManageVendorsPage from './pages/Admin/ManageVendorsPage';
import CustomerProfile from './components/Customer/CustomerProfile';
import VendorProfile from './components/Vendor/VendorProfile';
import SetPricesPage from './pages/Vendor/SetPricesPage';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/:roleId" element={<RegistrationPage />} />
        <Route path="/register" element={<RoleSelectionPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/birthdays" element={<BirthdaysPage />} />
        <Route path="/events/seminars" element={<SeminarsPage />} />
        <Route path="/events/weddings" element={<WeddingsPage />} />
        <Route path="/events/concerts" element={<ConcertsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<PrivateRoute element={<AdminDashboardPage />} allowedRoles={[1]} />} />
        <Route path="/admin/manage-events" element={<PrivateRoute element={<ManageEventsPage />} allowedRoles={[1]} />} />
        <Route path="/admin/manage-customers" element={<PrivateRoute element={<ManageCustomersPage />} allowedRoles={[1]} />} />
        <Route path="/admin/manage-vendors" element={<PrivateRoute element={<ManageVendorsPage />} allowedRoles={[1]} />} />
 
        {/* Customer Routes */}
        <Route path="/customer/dashboard" element={<PrivateRoute element={<CustomerDashboardPage />} allowedRoles={[2]} />} />
        <Route path="/customer/profile" element={<PrivateRoute element={<CustomerProfile />} allowedRoles={[2]} />} />

        {/* Vendor Routes */}
        <Route path="/vendor/dashboard" element={<PrivateRoute element={<VendorDashboardPage />} allowedRoles={[3]} />} />
        <Route path="/vendor/manage-bookings" element={<ManageBooking />} />
        <Route path="/vendor/profile" element={<PrivateRoute element={<VendorProfile />} allowedRoles={[3]} />} />
        <Route path="/vendor/set-prices" element={<PrivateRoute element={<SetPricesPage />} allowedRoles={[3]} />} />

        {/* Add other routes similarly */}
      </Routes>
    </div>
  );
};

export default App;
