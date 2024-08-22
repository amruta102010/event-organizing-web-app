import React, { useState, useEffect } from 'react';
import AdminLayout from '../Layout/AdminLayout';
import { createEvent, updateEvent, getEventById, getAllEvents, deleteEvent } from '../../services/eventService';
import { useParams } from 'react-router-dom';

const ManageEvent = () => {
  const { id: paramId } = useParams();  

  const [eventData, setEventData] = useState({
    eventName: '',
    eventDescription: '',
    basePrice: '',
    duration: '',
    eventType: 'WEDDING', 
    maxGuests: '',
  });

  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);  

 
  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateEvent(editingEventId, eventData)  
        .then(() => {
          fetchAllEvents();  
          resetForm();  
        })
        .catch((error) => console.error('Error updating event:', error));
    } else {
      createEvent(eventData)
        .then(() => {
          fetchAllEvents();  
          resetForm();  
        })
        .catch((error) => console.error('Error creating event:', error));
    }
  };

  
  const handleEdit = (id) => {
    getEventById(id)
      .then((response) => {
        setEventData(response.data);
        setIsEditing(true);
        setEditingEventId(id);  
      })
      .catch((error) => console.error('Error fetching event details:', error));
  };

  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id)
        .then(() => {
          fetchAllEvents();  
        })
        .catch((error) => console.error('Error deleting event:', error));
    }
  };

  
  const fetchAllEvents = () => {
    getAllEvents()
      .then((response) => {
        setEvents(response.data);  
      })
      .catch((error) => console.error('Error fetching events:', error));
  };

  
  const resetForm = () => {
    setEventData({
      eventName: '',
      eventDescription: '',
      basePrice: '',
      duration: '',
      eventType: 'WEDDING',
      maxGuests: '',
    });
    setIsEditing(false);  
    setEditingEventId(null);  
  };

  
  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <AdminLayout>
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{isEditing ? 'Update Event' : 'Create Event'}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-bold mb-2">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Event Description</label>
            <textarea
              name="eventDescription"
              value={eventData.eventDescription}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Base Price</label>
            <input
              type="number"
              name="basePrice"
              value={eventData.basePrice}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Duration (hours)</label>
            <input
              type="number"
              name="duration"
              value={eventData.duration}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Event Type</label>
            <select
              name="eventType"
              value={eventData.eventType}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              required
            >
              {/* Event type options */}
              <option value="WEDDING">Wedding</option>
              <option value="CONFERENCE">Conference</option>
              <option value="CONCERT">Concert</option>
              <option value="BIRTHDAY">Birthday</option>
              <option value="SEMINAR">Seminar</option>
              <option value="WORKSHOP">Workshop</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Max Guests</label>
            <input
              type="number"
              name="maxGuests"
              value={eventData.maxGuests}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditing ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>

        <h2 className="text-xl font-bold mt-8">All Events</h2>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              {/* Table headers */}
              <th className="px-4 py-2">Event Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Base Price</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Event Type</th>
              <th className="px-4 py-2">Max Guests</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.eventId}>
                
                <td className="border px-4 py-2">{event.eventName}</td>
                <td className="border px-4 py-2">{event.eventDescription}</td>
                <td className="border px-4 py-2">{event.basePrice}</td>
                <td className="border px-4 py-2">{event.duration}</td>
                <td className="border px-4 py-2">{event.eventType}</td>
                <td className="border px-4 py-2">{event.maxGuests}</td>
                <td className="border px-4 py-2 flex">
                 
                  <button
                    onClick={() => handleEdit(event.eventId)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Update
                  </button>
                  
                  <button
                    onClick={() => handleDelete(event.eventId)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ManageEvent;
