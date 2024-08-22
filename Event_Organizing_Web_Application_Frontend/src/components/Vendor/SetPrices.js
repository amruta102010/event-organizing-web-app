import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../../services/eventService';
import { createVendorEvent, getAllVendorEvents } from '../../services/vendorEventService';
import { getFromLocalStorage } from '../../utils/helpers';

const SetPrices = () => {
  const [events, setEvents] = useState([]);
  const [vendorEvents, setVendorEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [customPrice, setCustomPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsResponse = await getAllEvents();
        setEvents(eventsResponse.data);

        const vendorEventsResponse = await getAllVendorEvents();
        setVendorEvents(vendorEventsResponse.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEventSelect = (id) => {
    setSelectedEventId(Number(id));  
  };

  const handlePriceChange = (e) => {
    setCustomPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEventId || !customPrice) {
      setError('Please select an event and enter a custom price');
      return;
    }

    const userId = getFromLocalStorage('user');

    if (!userId) {
      setError('Vendor ID not found in user data');
      return;
    }

    const vendorEventData = {
      vendorId: parseInt(userId, 10),  
      eventId: parseInt(selectedEventId, 10),  
      customPrice: parseFloat(customPrice),  
    };

    console.log("Payload being sent to server:", vendorEventData);

    try {
      await createVendorEvent(vendorEventData);

      
      const vendorEventsResponse = await getAllVendorEvents();
      setVendorEvents(vendorEventsResponse.data);

      setSuccessMessage('Custom price set successfully');
      setCustomPrice('');
      setSelectedEventId(null);
    } catch (err) {
      console.error('Error setting custom price:', err);
      setError('Failed to set custom price');
    }
  };

  if (loading) return <p className="text-center text-blue-500">Loading events...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Set Event Prices</h1>
      <div className="mb-4">
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <div className="mb-4">
          <label htmlFor="event" className="block text-gray-700">Select Event</label>
          <select
            id="event"
            value={selectedEventId || ''}
            onChange={(e) => handleEventSelect(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-2"
          >
            <option value="">--Select an Event--</option>
            {events.map((event) => (
              <option key={event.eventId} value={event.eventId}>
                {event.eventName} - {event.date}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Custom Price</label>
          <input
            type="number"
            id="price"
            value={customPrice}
            onChange={handlePriceChange}
            className="border border-gray-300 rounded-lg w-full p-2"
            step="0.01"
            min="0"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Set Price
        </button>
      </form>
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Vendor Events</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4 border-b">Event Id</th>
            <th className="py-2 px-4 border-b">Custom Price</th>
          </tr>
        </thead>
        <tbody>
          {vendorEvents.length > 0 ? (
            vendorEvents.map((vendorEvent) => (
              <tr key={vendorEvent.vendorEventId}>
                <td className="py-2 px-4 border-b">{vendorEvent.vendorEventId}</td>
                <td className="py-2 px-4 border-b">{vendorEvent.customPrice.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="py-2 px-4 text-center text-gray-500">No vendor events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SetPrices;
