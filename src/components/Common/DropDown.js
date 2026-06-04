import React from 'react';
import './DropDown.css';
const DropDown = ({
  customerData = [],
  label = '',
  value = '',
  onChange = () => {},
}) => {
  return (
    <div className="dropdown-wrapper">
      <label>{label}</label>
      <select value={value} onChange={onChange} className="dropdown-select">
        <option value="">Select one</option>
        {customerData.map((item) => (
          <option key={item.customerId} value={item.customerId}>
            {item.customerId}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
