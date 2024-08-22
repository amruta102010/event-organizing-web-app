import axios from 'axios';
import { getFromLocalStorage } from '../utils/helpers';  

const API_URL = 'http://localhost:8080/api/users';


export const getUserById = (id) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const updateUser = (id, userDTO) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.put(`${API_URL}/${id}`, userDTO, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const deleteUser = (id) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getAllVendors = () => {
    const token = getFromLocalStorage('jwtToken');
    return axios.get(`${API_URL}/vendors`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getVendorById = (id) => {
    const token = getFromLocalStorage('jwtToken');
    const userId = getFromLocalStorage('user');
    return axios.get(`${API_URL}/vendors/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const updateVendorById = (id, userDTO) => {
    const token = getFromLocalStorage('jwtToken');
    const userId = getFromLocalStorage('user');
    return axios.put(`${API_URL}/vendors/${userId}`, userDTO, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const deleteVendor = (id) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.delete(`${API_URL}/vendors/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getAllCustomers = () => {
    const token = getFromLocalStorage('jwtToken');
    return axios.get(`${API_URL}/customers`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getCustomerById = (id) => {
    const token = getFromLocalStorage('jwtToken');
    const userId = getFromLocalStorage('user');
    return axios.get(`${API_URL}/customers/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const updateCustomerById = (id, userDTO) => {
    const token = getFromLocalStorage('jwtToken');
    const userId = getFromLocalStorage('user');
    return axios.put(`${API_URL}/customers/${userId}`, userDTO, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const deleteCustomer = (id) => {
    const token = getFromLocalStorage('jwtToken');
    return axios.delete(`${API_URL}/customers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const getAllAdmins = () => {
    const token = getFromLocalStorage('jwtToken');
    return axios.get(`${API_URL}/admins`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
