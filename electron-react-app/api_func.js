import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1'; //a backend URL

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-user`, userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};
