import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ links }) => {
  return (
    <aside className="w-64 h-screen flex top-0 left-0 bg-gray-800 text-white">
      <ul>
        {links.map((link, index) => (
          <li key={index} className="p-4 hover:bg-gray-700">
            {link.component ? (
              <link.component /> 
            ) : (
              <Link to={link.path}>{link.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;