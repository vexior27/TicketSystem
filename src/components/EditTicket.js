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
      <div>
         <h1 className='text-4xl mt-10 text-center'>Edit ticket</h1>
         <form onSubmit={handleSubmit}>
            <label>
               Title:
               <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
               Description:
               <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </label>
            <button type='submit'>
               Save changes
            </button>
         </form>
      </div>
   )
}