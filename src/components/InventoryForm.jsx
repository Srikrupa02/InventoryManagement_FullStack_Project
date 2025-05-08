import React, { useState, useEffect } from 'react';

const InventoryForm = ({ onAdd, onUpdate, editingItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setQuantity(editingItem.quantity);
      setPrice(editingItem.price);
      setCategory(editingItem.category);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      category,
    };

    if (editingItem) {
      onUpdate(editingItem.id, item);
    } else {
      onAdd(item);
    }

    setName('');
    setQuantity('');
    setPrice('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">{editingItem ? 'Update' : 'Add'} Item</button>
    </form>
  );
};

export default InventoryForm;