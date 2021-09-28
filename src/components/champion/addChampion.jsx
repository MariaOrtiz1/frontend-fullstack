import React from 'react';
import PropTypes from 'prop-types';

const addChampions = ({
  name,
  title,
  quote,
  region,
  position,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="name">Champion name:</label>
    <input
      name="name"
      id="name"
      type="text"
      value={name}
      onChange={onChange}
    />


    <label htmlFor="title">Champion title:</label>
    <input
      name="title"
      id="title"
      type="text"
      value={title}
      onChange={onChange}
    />


    <label htmlFor="quote">Champion quote:</label>
    <input
      name="quote"
      id="quote"
      type="text"
      value={quote}
      onChange={onChange}
    />


    <label htmlFor="region">Champion region:</label>
    <input
      name="region"
      id="region"
      type="text"
      value={region}
      onChange={onChange}
    />


    <label htmlFor="position">Champion position:</label>
    <input
      name="position"
      id="position"
      type="text"
      value={position}
      onChange={onChange}
    />


    <button aria-label="submit button">Add champion to the battlefield</button>
  </form>
);

addChampions.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,

  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default addChampions;
