import React from 'react';
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ searchQuery, onSearchChange }) {
   return (
      <div className="flex justify-center w-full">
         <input
            type="text"
            placeholder="Search ticket..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="p-2 border border-gray-300 rounded w-1/5"
         />
      </div>
   );
}