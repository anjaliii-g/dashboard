import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-2/6 p-3 border border-gray-300 rounded-lg"
        placeholder="Search for a widget..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
