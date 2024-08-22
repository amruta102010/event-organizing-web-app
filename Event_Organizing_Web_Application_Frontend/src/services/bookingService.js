import axios from 'axios';
import { getFromLocalStorage } from '../utils/helpers'; 
const API_URL = 'http://localhost:8080/bookings';


export const createBooking = (bookingData) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.post(API_URL, bookingData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getBookingById = (id) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getAllBookings = () => {
    const token = getFromLocalStorage('jwtToken');
    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const updateBooking = async (bookingId, updatedData) => {
  try {
      const token = getFromLocalStorage('jwtToken');
      const response = await axios.put(`${API_URL}/${bookingId}`, updatedData, {
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'  
          },
      });
      return response.data;
  } catch (error) {
      console.error('Error updating booking:', error);
      throw error; 
  }
};


export const deleteBooking = (id) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getBookingsByUserId = (userId) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.get(`${API_URL}/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
