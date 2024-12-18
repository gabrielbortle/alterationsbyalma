import axios from 'axios';

const API_URL = 'https://alterationsbyalma.com/wp-json/wc/v3/products';
const CONSUMER_KEY = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET;

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
