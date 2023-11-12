import axios from 'axios';

export const getCustomers = async () => {
  try {
    const response = await axios.get('/api/customers');
    return response.data;
  } catch (error) {
    console.error('Error fetching customers', error);
    return null;
  }
};
