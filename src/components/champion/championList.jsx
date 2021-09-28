import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SingleChampion from './SingleChampion';

const ChampionList = ({ champion }) => (
  <ul aria-label="champion-list">
    {champion.map((champion) => (
      <Link key={SingleChampion.id} to={`/${SingleChampion.id}`}>
        <li key={SingleChampion.id}>
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

ChampionList.propTypes = {
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

export default ChampionList;
