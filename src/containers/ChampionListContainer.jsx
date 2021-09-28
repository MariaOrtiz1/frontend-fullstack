import React, { useState, useEffect } from 'react';
import championList from '../components/champion/championList';
import { fetchChampionList } from '../services/championUtils';

const ChampionListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [champion, setChampion] = useState([]);

  useEffect(() => {
    fetchChampionList()
      .then((res) => setChampion(res))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <img
        // eslint-disable-next-line max-len
        src="https://payload.cargocollective.com/1/3/103256/13630924/Premium_Chest.gif"
        alt="loading spinner"
      />
    );
  }
  return (
    <>
      <championList champion={champion}/>
    </>
  );
};

export default ChampionListContainer;
