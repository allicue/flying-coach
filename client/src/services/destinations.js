import api from './apiConfig';

export const getAllDestinations = async () => {
  const resp = await api.get('/destinations')
  return resp.data 
}

export const getOneDestination = async (id) => {
  const resp = await api.get(`/destinations/${id}`)
  return resp.data
}