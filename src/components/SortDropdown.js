import React from 'react';
import { useState } from "react";
import { ComboboxItem, Select } from '@mantine/core';

export default function SortDropdown({ sortOption, onSortChange }) {

   const [value, setValue] = useState(sortOption);

   const handleChange = (value) => {
      setValue(value);
      onSortChange(value);  // Pass selected value to parent component
   };

   return (
      <div className="flex justify-center mb-5">
         <Select
            label="Sort by"
            placeholder="Pick value"
            data=
            {
               [
                  { value: 'title', label: 'Title' },
                  { value: 'dateAsc', label: 'Date ascending'},
                  { value: 'dateDesc', label: 'Date descending'}
               ]
               
            }
            onChange={handleChange}
            clearable
         >
         </Select>
      </div>
   );
}
