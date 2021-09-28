import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import singleChampion from './singleChampion';

const championList = ({ champion }) => (
  <ul aria-label="champion-list">
    {champion.map((champion) => (
      <Link key={singleChampion.id} to={`/${singleChampion.id}`}>
        <li key={singleChampion.id}>
          <singleChampion 
            name={champion.name}
            title={champion.title}
            quote={champion.quote}
            region={champion.region}
            position={champion.position}
          />
        </li>
      </Link>
    ))}
  </ul>
);

championList.propTypes = {
  champion: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ),
};

export default championList;
