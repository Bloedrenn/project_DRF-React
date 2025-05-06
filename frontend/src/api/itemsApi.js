import axios from 'axios';

export const fetchItems = () => axios.get('/api/items/');
export const fetchItem = (id) => axios.get(`/api/items/${id}/`);
export const createItem = (item) => axios.post('/api/items/', item);
export const updateItem = (id, item) => axios.put(`/api/items/${id}/`, item);
export const deleteItem = (id) => axios.delete(`/api/items/${id}/`);
