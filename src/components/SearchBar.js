import React from 'react';

import { Input } from '@mantine/core';

export default function SearchBar({ searchQuery, onSearchChange }) {
   return (
      <div className="flex justify-center w-full">
         <Input
            type="text"
            placeholder="Search ticket..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className='w-1/4'
         />
      </div>
   );
}