import React from 'react';

export default function SortDropdown({ sortOption, onSortChange }) {
   return (
      <div className="flex justify-center mb-5">
         <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="p-2 border border-gray-300 rounded"
         >
            <option value="">Sort by...</option>
            <option value="title">Sort by Title</option>
            <option value="dateAsc">Sort by Date (Ascending)</option>
            <option value="dateDesc">Sort by Date (Descending)</option>
         </select>
      </div>
   );
}
