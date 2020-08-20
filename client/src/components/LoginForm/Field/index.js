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
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
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
      />

      
    </div>
  );
};


// == Export
export default Field;
