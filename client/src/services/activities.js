import api from './apiConfig';

export const getAllActivities = async () => {
  const resp = await api.get('/activities')
  return resp.data 
}

export const getOneActivity = async (id) => {
  const resp = await api.get(`/activities/${id}`)
  return resp.data
}

export const postActivity = async (activityData) => {
  const resp = await api.post('/activities', { activity: activityData })
  return resp.data
}

export const putActivity = async (id, activityData) => {
  const resp = await api.put(`/activities/${id}`, { activity: activityData })
  return resp.data
}

export const destroyActivity = async (id) => {
  const resp = await api.delete(`/activities/${id}`)
  return resp
}

