import React from 'react';

export default function SearchBar({ searchQuery, onSearchChange }) {
   return (
      <div className="flex justify-center mb-5 w-full">
         <input
            type="text"
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/5"
         />
      </div>
   );
}