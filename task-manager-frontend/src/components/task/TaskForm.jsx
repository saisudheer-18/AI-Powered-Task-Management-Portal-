import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function TaskForm({ 
  onSubmit, 
  initialData = null,
  loading = false,
  onGenerateAI = null,
  aiLoading = false
}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'LOW',
    status: 'TODO',
    dueDate: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        priority: initialData.priority || 'LOW',
        status: initialData.status || 'TODO',
        dueDate: initialData.dueDate || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Required Field",
        text: "Task title is required"
      });
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title Field */}
      <div>
        <label className="block text-sm font-medium">Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      {/* Optional AI Generator Button */}
      {onGenerateAI && (
        <button
          type="button"
          onClick={() => onGenerateAI(formData.title)}
          disabled={aiLoading || !formData.title.trim()}
          className={`w-full px-4 py-2 rounded-lg text-white font-medium flex justify-center items-center gap-2 transition-colors ${
            aiLoading || !formData.title.trim() ? 'bg-purple-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {aiLoading ? 'Generating AI Suggestions...' : '✨ Auto-Generate Details with AI'}
        </button>
      )}

      {/* Description Field */}
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter task description"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>

      {/* Priority Field */}
      <div>
        <label className="block text-sm font-medium">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      {/* Status Field */}
      <div>
        <label className="block text-sm font-medium">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </div>

      {/* Due Date Field */}
      <div>
        <label className="block text-sm font-medium">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={loading}
        className={`w-full px-4 py-2 rounded-lg text-white font-medium ${
          loading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Saving...' : 'Save Task'}
      </button>
    </form>
  );
}
