import React, { useState, useEffect } from 'react';
import VendorLayout from '../Layout/VendorLayout';
import { getAllBookings, updateBooking } from '../../services/bookingService';

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const fetchAllBookings = async () => {
    try {
      const response = await getAllBookings();
      console.log("Fetched Bookings:", response); 

      
      if (Array.isArray(response.data)) {
        setBookings(response.data);
      } else {
        setBookings([]); 
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setBookings([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  useEffect(() => {
    console.log("Bookings State:", bookings);
  }, [bookings]);

  
  const filterBookingsByStatus = (status) => {
    return bookings.filter((booking) => booking.bookingStatus === status);
  };

  
  const handleUpdateBookingStatus = async (bookingId, status) => {
    try {
      const bookingToUpdate = bookings.find(booking => booking.bookingId === bookingId);

      if (!bookingToUpdate) {
        throw new Error('Booking not found');
      }

      const updatedBooking = {
        ...bookingToUpdate,
        bookingStatus: status
      };

      await updateBooking(bookingId, updatedBooking);
      fetchAllBookings(); // Refresh the booking list after updating
    } catch (error) {
      console.error(`Error updating booking status to ${status}:`, error);
    }
  };

  if (loading) {
    return (
      <VendorLayout>
        <div className="p-4 max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </VendorLayout>
    );
  }

  return (
    <VendorLayout>
      <div className="p-4 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Manage Bookings</h1>

       
        <div>
          <h2 className="text-xl font-bold mb-2">Pending Bookings</h2>
          <BookingTable
            bookings={filterBookingsByStatus('PENDING')}
            onUpdateStatus={handleUpdateBookingStatus}
          />

          <h2 className="text-xl font-bold mb-2 mt-6">Confirmed Bookings</h2>
          <BookingTable bookings={filterBookingsByStatus('CONFIRMED')} />

          <h2 className="text-xl font-bold mb-2 mt-6">Cancelled Bookings</h2>
          <BookingTable bookings={filterBookingsByStatus('CANCELLED')} />
        </div>
      </div>
    </VendorLayout>
  );
};

const BookingTable = ({ bookings, onUpdateStatus }) => {
  if (bookings.length === 0) {
    return <p className="text-gray-500">No bookings found for this status.</p>;
  }

  return (
    <table className="table-auto w-full mt-4">
      <thead>
        <tr>
          <th className="px-4 py-2">Booking ID</th>
          <th className="px-4 py-2">Booking Date</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.bookingId}>
            <td className="border px-4 py-2">{booking.bookingId}</td>
            <td className="border px-4 py-2">{new Date(booking.createdAt).toLocaleDateString()}</td>
            <td className="border px-4 py-2">{booking.bookingStatus}</td>
            <td className="border px-4 py-2">{booking.totalAmount}</td>
            <td className="border px-4 py-2 flex">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                View Details
              </button>
              {booking.bookingStatus === 'PENDING' && (
                <>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => onUpdateStatus(booking.bookingId, 'CONFIRMED')}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => onUpdateStatus(booking.bookingId, 'CANCELLED')}
                  >
                    Reject
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageBooking;

