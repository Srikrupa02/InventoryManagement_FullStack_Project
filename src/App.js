import React, { useEffect, useState } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './api';
import InventoryForm from './components/InventoryForm';
import InventoryList from './components/InventoryList';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = async () => {
    const res = await getItems();
    setItems(res);
  };

  const handleAdd = async (item) => {
    await addItem(item);
    fetchItems();
  };

  const handleUpdate = async (id, item) => {
    await updateItem(id, item);
    setEditingItem(null);
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="app-container">
      <h2 className="app-title">Inventory Management System</h2>
      <InventoryForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingItem={editingItem}
      />
      <InventoryList
        items={items}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;
