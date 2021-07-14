import React from 'react';
import './style.css';
const UserDetail = ({ username }) => {
  return (
    <div className="userDetail__container--area">
      <span className="userDetail__name">{username}</span>
      <div className="userDetail__description">Times are match with your timezone</div>
    </div>
  );
};
export default UserDetail;