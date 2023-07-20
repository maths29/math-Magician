import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, className, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
