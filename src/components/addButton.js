import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, className }) {
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
