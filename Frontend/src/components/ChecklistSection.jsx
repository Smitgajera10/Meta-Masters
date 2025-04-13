import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';

const ChecklistSection = ({ eventId }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(1);
  const [addingToCategoryId, setAddingToCategoryId] = useState(null);


  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/api/checklists/${eventId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Check if response.data and response.data.categories exist
        if (response.data && response.data.categories) {
          setCategories(response.data.categories);
          if (response.data.categories.length > 0) {
            setActiveCategory(response.data.categories[0].id);
          }
        } else {
          // Handle the case where categories is undefined or empty
          console.warn("No categories found or invalid response structure.");
          setCategories([]); // Set to an empty array to avoid further errors
          setActiveCategory(null);
        }
      } catch (error) {
        console.error("Error fetching checklist:", error);
        setCategories([]); // Set to an empty array to avoid further errors
        setActiveCategory(null);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) fetchChecklist();
  }, [eventId]);

  const handleAddCategory = async () => {
    const token = localStorage.getItem("token");
    const categoryName = prompt("Enter category name:");
  
    if (!categoryName) return;
  
    try {
      const res = await axios.post(`http://localhost:5000/api/checklists/${eventId}/categories`, {
        name: categoryName
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      const newCategory = res.data;
      setCategories(prev => [...prev, newCategory]);
    } catch (err) {
      console.error("Failed to add category:", err);
    }
  };
  

  const handleDeleteItem = async (itemId, categoryId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/checklists/${eventId}/items/${itemId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCategories(prev =>
        prev.map(cat =>
          cat.id === categoryId
            ? { ...cat, items: cat.items.filter(item => item.id !== itemId) }
            : cat
        )
      );
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  const cycleStatus = (status) => {
    const statuses = ['pending', 'packed', 'delivered'];
    const index = statuses.indexOf(status);
    return statuses[(index + 1) % statuses.length];
  };

  const handleStatusToggle = async (item, categoryId) => {
    const newStatus = cycleStatus(item.status);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `http://localhost:5000/api/checklists/${eventId}/items/${item.id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCategories(prev =>
        prev.map(cat =>
          cat.id === categoryId
            ? {
              ...cat,
              items: cat.items.map(it =>
                it.id === item.id ? { ...it, status: newStatus } : it
              )
            }
            : cat
        )
      );
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };


  if (loading) return <div>Loading checklist...</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Checklist</h2>
        <button className="btn-primary flex items-center"
        onClick={handleAddCategory}>
          <FaPlus className="mr-2" />
          Add Category
        </button>
      </div>

      {/* Display categories */}
      {categories.map(category => (
        <div key={category.id} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
          <ul className="space-y-2">
            {category.items.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
              >
                <div onClick={() => handleStatusToggle(item, category.id)} className="cursor-pointer">
                  <span className="font-medium">{item.name}</span> – {item.quantity} pcs
                  <div className="text-sm text-gray-500">{item.status}</div>
                </div>
                <button onClick={() => handleDeleteItem(item.id, category.id)} className="text-red-600 text-sm">
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {addingToCategoryId === category.id ? (
            <div className="mt-2 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Item name"
                className="input"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
              <input
                type="number"
                className="input w-20"
                min={1}
                value={newItemQuantity}
                onChange={(e) => setNewItemQuantity(Number(e.target.value))}
              />
              <button onClick={() => handleAddItem(category.id)} className="btn-primary text-sm">
                Add
              </button>
              <button onClick={() => setAddingToCategoryId(null)} className="text-sm text-gray-600">
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setAddingToCategoryId(category.id)}
              className="text-sm text-blue-500 mt-2"
            >
              + Add Item
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChecklistSection;
