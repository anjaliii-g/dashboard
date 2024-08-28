import React from "react";

const Dashboard = ({ data, setModalOpen, setSelectedCategory, removeWidget, searchQuery }) => {
  return (
    <div className="space-y-6">
      {data.categories.map((category) => {
        // Filter widgets based on search query
        const filteredWidgets = category.widgets.filter((widget) =>
          widget.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div key={category.name} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <div className="flex flex-wrap gap-4 items-start">
              {filteredWidgets.map((widget) => (
                <div
                  key={widget.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm relative w-1/3 h-32 overflow-hidden flex flex-col justify-between"
                >
                  <h3 className="text-lg font-medium truncate">{widget.name}</h3>
                  <p className="text-gray-600 overflow-hidden text-ellipsis break-words max-h-12">
                    {widget.text}
                  </p>
                  <button
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    onClick={() => removeWidget(category.name, widget.id)}
                  >
                    &times;
                  </button>
                </div>
              ))}

              {/* Add Widget Button beside widgets */}
              <button
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 self-start"
                onClick={() => {
                  setSelectedCategory(category.name);
                  setModalOpen(true);
                }}
              >
                + Add Widget
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
