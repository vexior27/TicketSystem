import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getTicket } from '../api/ticket/getTicket';
import { editTicket } from '../api/ticket/editTicket';

export default function EditTicket() {

   const { id } = useParams();
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      const fetchTicket = async () => {
         const fetchedTicket = getTicket(id);
         if(fetchedTicket) {
            setTitle(fetchedTicket.title);
            setDescription(fetchedTicket.description);
         }
      }
      fetchTicket();
   }, [id])

   const handleSubmit = (e) => {
      e.preventDefault();
      if(title !== '' && description !== '') {
         const succes = editTicket(id, {id,title,description});
         if(succes) {
            alert('Ticket was succesfully updated!')
            navigate('/')
         }
         else {
            alert('Error!')
         }
      }
      else {
         alert('Title and description are must!')
      }
   }

   return (
      <div className='flex flex-col items-center gap-5'>
         <h1 className='text-4xl mt-10 text-center'>Edit ticket</h1>
         <form onSubmit={handleSubmit} className='ticket bg-gray-50 w-1/3 rounded-md border border-gray-100 p-10 flex flex-col items-center justify-center gap-5'>
            <label className='font-medium text-xl'>
               Title
               <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required className='ease-out duration-100 font-normal p-2 bg-transparent focus:border-b-green-400 focus:outline-none border-gray-100 border-b-2 ml-2 placeholder:font-normal' placeholder='New title'/>
            </label>
            <label className='font-medium text-xl'>
               Description
               <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required className='ease-out duration-100 font-normal p-2 bg-transparent focus:border-b-green-400 focus:outline-none border-gray-100 border-b-2 ml-2 placeholder:font-normal' placeholder='New description'/>
            </label>
            <button type='submit' className="ease-out duration-100 bg-green-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md border border-green-500 hover:bg-transparent hover:text-green-500 hover:scale-105">
               Save changes
            </button>
         </form>
      </div>
   )
}