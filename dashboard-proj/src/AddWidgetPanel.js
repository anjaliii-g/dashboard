import React, { useState } from "react";

const AddWidgetPanel = ({ addWidget, category, setModalOpen }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [widgetImage, setWidgetImage] = useState(null); // State to store the image file

  const handleAddWidget = () => {
    if (widgetName && (widgetText || widgetImage)) {
      addWidget(category, { name: widgetName, text: widgetText, image: widgetImage });
      setModalOpen(false); // Close the panel after adding
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setWidgetImage(reader.result); // Store image as base64 URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed right-0 top-0 bottom-0 w-2/6 bg-white shadow-lg p-6 z-50 overflow-auto">
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

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {/* Image Preview */}
      {widgetImage && (
        <div className="mb-4">
          <img src={widgetImage} alt="Preview" className="max-w-full h-auto rounded-lg" />
        </div>
      )}

      {/* Add and Cancel Buttons */}
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
  );
};

export default AddWidgetPanel;
