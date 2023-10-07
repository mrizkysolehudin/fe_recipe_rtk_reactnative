import axios from 'axios';

const http = (token = null) => {
  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios.create({
    headers,
  });
};

export default http;
