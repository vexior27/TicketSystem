import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getTicket } from '../api/ticket/getTicket';
import { editTicket } from '../api/ticket/editTicket';

import {toast} from "react-hot-toast"

import { Input, Textarea, Button, Title } from "@mantine/core";

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
            toast.success("Ticket succesfully updated!")
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
         <Title align='center' m='xs'>Edit ticket</Title>
         <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-1/3 '>
            <label className='font-medium text-lg flex flex-col gap-1 '>
               Title
               <Input 
                  type='text' 
                  value={title}
                  fw={400} 
                  onChange={(e) => setTitle(e.target.value)} 
                  required 
               />
            </label>
            <label className='font-medium text-lg flex flex-col gap-1'>
               Description
               <Textarea 
                  type='text' 
                  fw={400} 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                  required 
                   
               />
            </label>
            <Button 
               type='submit' 
               color="green" 
               w={150}
            >
               Save changes
            </Button>
         </form>
      </div>
   )
}