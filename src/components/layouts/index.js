import React from 'react';
import './style.css';

const AppLayout = ({ children }) => {
  return (
    <div className="app__layout--area">
      <div className="layout-wrapper">
        {children}
      </div>
    </div>
  );
};
export default AppLayout;