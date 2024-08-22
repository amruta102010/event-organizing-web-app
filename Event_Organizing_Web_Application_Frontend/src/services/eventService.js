import axios from 'axios';
import { getFromLocalStorage } from '../utils/helpers';

const API_URL = 'http://localhost:8080';

export const createEvent = (eventData) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.post(`${API_URL}/event/create`, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllEvents = () => {
  const token = getFromLocalStorage('jwtToken');
  return axios.get(`${API_URL}/event/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getEventById = (id) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.get(`${API_URL}/event/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateEvent = (id, eventData) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.put(`${API_URL}/event/update/${id}`, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteEvent = (id) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.delete(`${API_URL}/event/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
