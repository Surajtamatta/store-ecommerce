import axios from 'axios';

export default async function handler(req, res) {
  const API_BASE_URL = process.env.API_BASE_URL;

  if (!API_BASE_URL) {
    return res.status(500).json({ error: 'API_BASE_URL is not defined' });
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      timeout: 15000,
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);

    if (error.response) {
      // Handle errors returned by the external API
      return res.status(error.response.status).json({
        error: `Error fetching products: ${error.response.statusText}`,
        details: error.response.data,
      });
    }
    return res.status(500).json({
      error: 'Failed to fetch products',
      message: error.message,
    });
  }
}
