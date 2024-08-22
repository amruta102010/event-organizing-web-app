import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <button 
            onClick={handleLogout} 
            className="hover:text-gray-300"
        >
            Logout
        </button>
    );
};

export default Logout;