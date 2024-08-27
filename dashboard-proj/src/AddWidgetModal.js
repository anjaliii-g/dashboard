import React, { useState } from "react";

const AddWidgetModal = ({ addWidget, category, setModalOpen }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAddWidget = () => {
    if (widgetName && widgetText) {
      addWidget(category, { name: widgetName, text: widgetText });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Add Widget to {category}</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        ></textarea>
        <div className="flex justify-end space-x-4">
          <button
            className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            onClick={handleAddWidget}
          >
            Add Widget
          </button>
          <button
            className="py-2 px-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
