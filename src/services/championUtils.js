export const addChampion = async (data) => {
  const response = await fetch('http://localhost:7890/api/v1/champions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
  
export const fetchChampionList = async () => {
  const response = await fetch('http://localhost:7890/api/v1/champions');
  const champion = await response.json();
  
  return champion;
};
  
export const fetchChampionById = async (id) => {
  const response = await fetch(`http://localhost:7890/api/v1/champions/${id}`);
  
  return response.json();
};
  
export const updateChampion = async (data = {}) => {
  const response = await fetch('http://localhost:7890/api/v1/champions', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
  
export const deleteChampion = async (id) => {
  return await fetch(`http://localhost:7890/api/v1/champions/${id}`, {
    method: 'DELETE',
  });
};
