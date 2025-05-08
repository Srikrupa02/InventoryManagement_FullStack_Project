import axios from 'axios';

// Base URL for your backend API
const API_URL = 'https://localhost:7200/api/inventory';  // Change this URL if necessary

// Fetch all inventory items
export const getItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    throw error;
  }
};

// Add an inventory item
export const addItem = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error('Error adding inventory item:', error);
    throw error;
  }
};

// Update an inventory item
export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, item);  // Corrected the syntax here
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Delete an inventory item
export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);  // Corrected the syntax here
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

