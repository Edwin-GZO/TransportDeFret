// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local


// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
   onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div >
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        required
      />

      
    </div>
  );
};


// == Export
export default Field;
