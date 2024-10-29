
import { useState, useEffect } from "react"

import { Link } from "react-router-dom";

export default function TicketList() {

   const [tickets, setTickets] = useState([
      { id: '1', title: 'First Ticket', description: 'This is the first ticket' },
      { id: '2', title: 'Second Ticket', description: 'This is the second ticket' },
   ]);

   const deleteTicketById = (id) => {
      setTickets(tickets.filter(ticket => ticket.id !== id));
   };

   return (
      <div className="">
         <h1 className="text-4xl m-5 text-center">Ticket List</h1>
         <div className="ticket__container ">
            <ul className="flex flex-col items-center gap-5">
               {tickets.map(ticket => (
                  <li key={ticket.id} className="ticket bg-gray-50 w-1/3 rounded-md border border-gray-100 p-10 ease-out duration-100 hover:scale-105">
                     <Link to={`/ticket/${ticket.id}`}>
                        <h3 className="font-medium text-xl">{ticket.title}</h3>
                        <p className="mb-2">{ticket.description}</p>
                           <Link to={`/edit-ticket/${ticket.id}`}>
                              <button className="edit__button ease-out duration-100 bg-black text-white pl-5 pr-5 pt-2 pb-2 rounded-md mr-2 border border-black hover:bg-transparent hover:text-black hover:scale-105">Edit</button>
                           </Link>
                        {/* delete ticket */}
                        <button className="delete__button ease-out duration-100 bg-red-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md border border-red-500 hover:bg-transparent hover:text-red-500 hover:scale-105" onClick={() => deleteTicketById(ticket.id)}>Delete</button>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}