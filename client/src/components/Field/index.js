import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  placeholder,
  reducerName,
  name,
  value,
  changeField,
  cssClass,
  id,
}) => {
  let field;

  const inputChangeHandler = (event) => {
    let value = event.target.value; 

    // 'patrick'
    // +value = NaN

    // '0'
    // +value = 0
    if (!isNaN(+value)) { 
      value = +value 
    }
    
    changeField({name, value, reducerName});
  };

  switch (type) {
    case 'textarea':
      field = (
        <textarea
          id={id}
          className={cssClass}
          placeholder={placeholder}
          name={name}
          value={value}
          // maxLength={}
          onChange={inputChangeHandler}></textarea>
      );
      break;
    case 'password':
      field = (
        <input
          id={id}
          className={cssClass}
          type="password"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    case 'email':
      field = (
        <input
          id={id}
          className={cssClass}
          type="email"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
      case 'select':
      field = (
        <select multiple="" class="ui dropdown"
        
          id={id}
          className={cssClass}
          type="select"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
          >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          </select>
      );
      break;
    case 'date':
      field = (
        <input
          id={id}
          className={cssClass}
          type="date"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    default:
      field = (
        <input
          id={id}
          type="text"
          className={cssClass}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
  }

  return <>{field}</>;
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  reducerName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool, PropTypes.number]).isRequired,
  changeField: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
  id: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  cssClass: '',
  id: '',
};

export default Field;