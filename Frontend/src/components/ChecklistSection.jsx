import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTasks, FaEllipsisH } from 'react-icons/fa';

const initialCategories = [
  {
    id: 1,
    name: '🧼 Hygiene',
    items: [
      { id: 101, name: 'Toothbrush', quantity: 1, status: 'packed', assignedTo: 'Sarah Wilson', notes: '' },
      { id: 102, name: 'Shampoo', quantity: 1, status: 'pending', assignedTo: null, notes: 'Travel size' },
      { id: 103, name: 'Sunscreen', quantity: 1, status: 'pending', assignedTo: 'Michael Brown', notes: 'SPF 50+' },
    ]
  },
  {
    id: 2,
    name: '🔌 Tech',
    items: [
      { id: 201, name: 'Phone Charger', quantity: 2, status: 'packed', assignedTo: 'Sarah Wilson', notes: '' },
      { id: 202, name: 'Camera', quantity: 1, status: 'pending', assignedTo: null, notes: 'With extra battery' },
      { id: 203, name: 'Power Bank', quantity: 1, status: 'delivered', assignedTo: 'Michael Brown', notes: '' },
    ]
  },
  {
    id: 3,
    name: '🍽️ Food',
    items: [
      { id: 301, name: 'Snacks', quantity: 5, status: 'pending', assignedTo: null, notes: 'Non-perishable' },
      { id: 302, name: 'Water Bottles', quantity: 3, status: 'packed', assignedTo: 'Sarah Wilson', notes: '' },
    ]
  }
];

const ChecklistSection = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [activeCategory, setActiveCategory] = useState(initialCategories[0].id);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(1);

  const activeItems = categories.find(c => c.id === activeCategory)?.items || [];

  const handleAddItem = (e) => {
    e.preventDefault();
    setNewItemName('');
    setNewItemQuantity(1);
  };

  const updateItemStatus = (itemId, status) => {
    // Update item status logic
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Checklist</h2>
        <button className="btn-primary flex items-center">
          <FaPlus className="mr-2" />
          Add Category
        </button>
      </div>
      {/* Remaining code */}
    </div>
  );
};

export default ChecklistSection;