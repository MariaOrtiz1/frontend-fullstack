import React from 'react';
import PropTypes from 'prop-types';

const updateChampion = ({
  onChange,
  onSubmit,
  quote,
  region,
  position,

}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="quote"> Champion quote: </label>
    <input
      id="quote"
      type="text"
      name="quote"
      value={quote}
      onChange={onChange}
    />


    <label htmlFor="position">Champion position: </label>
    <input
      id="position"
      type="text"
      name="position"
      value={position}
      onChange={onChange}
    />


    <label htmlFor="region"> Champion region: </label>
    <input
      id="region"
      type="text"
      name="region"
      value={region}
      onChange={onChange}
    />
  </form>
);

updateChampion.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  quote: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default updateChampion;
