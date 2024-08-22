import axios from 'axios';
import { getFromLocalStorage } from '../utils/helpers';

const API_URL = 'http://localhost:8080';

export const createVendorEvent = (vendorEventData) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.post(`${API_URL}/vendor-events`, vendorEventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllVendorEvents = () => {
  const token = getFromLocalStorage('jwtToken');
  return axios.get(`${API_URL}/vendor-events`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getVendorEventById = (id) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.get(`${API_URL}/vendor-events/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateVendorEvent = (id, vendorEventData) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.put(`${API_URL}/vendor-events/${id}`, vendorEventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteVendorEvent = (id) => {
  const token = getFromLocalStorage('jwtToken');
  return axios.delete(`${API_URL}/vendor-events/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
