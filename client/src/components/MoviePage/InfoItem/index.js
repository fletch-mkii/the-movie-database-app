import React from 'react';
import './index.css';
  
const InfoItem = ({ title, details }) => details ? (
    <div className="InfoItem">
        <h4 className="InfoItem__title">{title}:</h4>
        <p className="InfoItem__details">{details}</p>
    </div>
) : null;

export default InfoItem;
  