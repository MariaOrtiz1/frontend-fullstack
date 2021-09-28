import React from 'react';
import PropTypes from 'prop-types';

const singleChampion = ({
  name,
  title,
  quote,
  region,
  position,
}) => (
  <div aria-label="singleChampion">
    <h2>{name}</h2>
    <p>{title}</p>
    <p>{quote}</p>
    <p>{region}</p>
    <p>{position}</p>
  </div>
);

singleChampion.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default singleChampion;
