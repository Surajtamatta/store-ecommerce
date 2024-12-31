// pages/api/products/[id].js

import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export default async function handler(req, res) {

  const { id } = req.query;
  if (!API_BASE_URL) {
    return res.status(500).json({ error: 'API_BASE_URL is not defined' });
  }
  if (!id) {
    return res.status(400).json({ error: 'Product ID is required.' });
  }
  console.log(id)
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`, {
      timeout: 15000,
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching product:', error.message);

    if (error.response) {
      return res.status(error.response.status).json({
        error: `Error fetching product: ${error.response.statusText}`,
        details: error.response.data,
      });
    }

    res.status(500).json({ error: 'Failed to fetch product', message: error.message });
  }
}
