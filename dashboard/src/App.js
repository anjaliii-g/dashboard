import React, { useState } from 'react';
import Dashboard from './Dashboard';
import AddWidgetModal from './AddWidgetModal';
import initialData from './dashboardData.json';

const App = () => {
  const [dashboardData, setDashboardData] = useState(initialData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addWidget = (categoryName, widget) => {
    const updatedData = dashboardData.categories.map((category) => {
      if (category.name === categoryName) {
        return {
          ...category,
          widgets: [...category.widgets, { id: Date.now(), ...widget }]
        };
      }
      return category;
    });
    setDashboardData({ categories: updatedData });
    setModalOpen(false);
  };

  const removeWidget = (categoryName, widgetId) => {
    const updatedData = dashboardData.categories.map((category) => {
      if (category.name === categoryName) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId)
        };
      }
      return category;
    });
    setDashboardData({ categories: updatedData });
  };

  return (
    <div className="p-8">
      <Dashboard
        data={dashboardData}
        setModalOpen={setModalOpen}
        setSelectedCategory={setSelectedCategory}
        removeWidget={removeWidget}
      />
      {isModalOpen && (
        <AddWidgetModal
          addWidget={addWidget}
          category={selectedCategory}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default App;
