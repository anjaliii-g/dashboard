import React from 'react';

const Dashboard = ({ data, setModalOpen, setSelectedCategory, removeWidget }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.categories.map((category) => (
        <div key={category.name} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
          <div className="space-y-4">
            {category.widgets.map((widget) => (
              <div
                key={widget.id}
                className="bg-gray-100 p-4 rounded-lg shadow-sm relative"
              >
                <h3 className="text-lg font-medium">{widget.name}</h3>
                <p className="text-gray-600">{widget.text}</p>
                <button
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  onClick={() => removeWidget(category.name, widget.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <button
            className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => {
              setSelectedCategory(category.name);
              setModalOpen(true);
            }}
          >
            + Add Widget
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
