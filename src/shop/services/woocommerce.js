import axios from 'axios';

const API_URL = 'https://alterationsbyalma.com/wp-json/wc/v3/products';
const CONSUMER_KEY = 'ck_72f8ab228e8b75d535ab255f5efc6edfb2cd26ba';
const CONSUMER_SECRET = 'cs_62059f9bdd32c7bca62d1e2d111ce32a4bd17062';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Basic ${btoa(CONSUMER_KEY + ':' + CONSUMER_SECRET)}`, // Use btoa for Base64 encoding
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.response?.data || error.message);
    throw error;
  }
};
