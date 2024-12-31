import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'https://fakestoreapi.com';

export default async function handler(req, res) {
  const { path } = req.query;

  if (!API_BASE_URL) {
    return res.status(500).json({ error: 'API base URL is not defined' });
  }

  if (!path || path.length === 0) {
    return res.status(400).json({ error: 'Invalid API path' });
  }

  const endpoint = `${API_BASE_URL}/products/${path.join('/')}`;
  console.log(`Fetching from API: ${endpoint}`); 

  try {
    const response = await axios.get(endpoint, { timeout: 15000 });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(error.response?.status || 500).json({
      error: `Failed to fetch data: ${error.response?.statusText || 'Internal Server Error'}`,
      message: error.message,
    });
  }
}
