import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTicket } from '../api/ticket/getTicket';

export default function TicketDetails() {
   
   const { id } = useParams();
   const [ticket, setTicket] = useState(null);

   useEffect( () => {
      setTicket(getTicket(id));
   }, [id])

   if(!ticket) {
      return <p>Error: ticket wasn't found!</p>
   }

   return (
      <div className='flex flex-col items-center gap-5'>
         <h1 className='text-4xl mt-10 text-center'>Ticket details</h1>
         <div className='bg-gray-50 w-1/3 rounded-md border border-gray-100 p-10 ease-out duration-100 cursor-pointer hover:scale-105'>
            <h2 className='font-medium text-xl'>ID: {ticket.id}</h2>
            <h1 className='font-medium'>Title: <span className='font-normal'>{ticket.title}</span></h1>
            <p className='font-medium'>Description: <span className='font-normal'>{ticket.description}</span></p>
            <p className='font-medium'>Date: <span className='font-normal'>{ticket.date.toLocaleDateString()}</span></p>
         </div>
      </div>
   );
}