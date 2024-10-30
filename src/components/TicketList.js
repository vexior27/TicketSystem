
import { useState, useEffect } from "react"
import { getTickets, deleteTicket } from "../api/ticket/getTickets";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

export default function TicketList() {

   const [tickets, setTickets] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [sortOption, setSortOption] = useState(''); 

   const filteredTickets = tickets.filter( ticket => 
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
   );

   const sortedTickets = filteredTickets.sort((a,b) => {
      if(sortOption === 'title') {
         return a.title.localeCompare(b.title);
      }
      else if (sortOption === "dateAsc") {
         return new Date(a.date) - new Date(b.date);
      } else if (sortOption === "dateDesc") {
         return new Date(b.date) - new Date(a.date);
      }
      return 0;
   })

   const handleSortChange = (option) => {
      setSortOption(option);
   };

   const handleSearchChange = (query) => {
      setSearchQuery(query);
   };

   useEffect(() => {
      const allTickets = getTickets();
      setTickets(allTickets);
   }, [])

   const deleteTicketById = (id) => {
      const updatedTickets = deleteTicket(id);
      setTickets(updatedTickets);
   };

   return (
      <div className="">
         <h1 className="text-4xl m-5 text-center">Ticket List</h1>
         <div className="ticket__container flex flex-col items-center justify-start gap-4">
            <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            <SortDropdown sortOption={sortOption} onSortChange={handleSortChange} />
            <ul className="flex flex-col items-center gap-5 w-full">
               {sortedTickets.map(ticket => (
                  <li key={ticket.id} className="ticket bg-gray-50 w-1/3 rounded-md border border-gray-100 p-10 ease-out duration-100 hover:scale-105">
                     <Link to={`/ticket/${ticket.id}`}>
                        <h3 className="font-medium text-xl">{ticket.title}</h3>
                        <p className="mb-2">{ticket.description}</p>
                        </Link>
                           <Link to={`/edit-ticket/${ticket.id}`}>
                              <button className="edit__button ease-out duration-100 bg-black text-white pl-5 pr-5 pt-2 pb-2 rounded-md mr-2 border border-black hover:bg-transparent hover:text-black hover:scale-105">Edit</button>
                           </Link>
                        {/* delete ticket */}
                        <button className="delete__button ease-out duration-100 bg-red-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md border border-red-500 hover:bg-transparent hover:text-red-500 hover:scale-105" onClick={() => deleteTicketById(ticket.id)}>Delete</button>
                  </li>
               ))}
            </ul>
         </div>
         <div className="btn__container flex items-center justify-center p-10">
            <Link to='/add-ticket' >
               <button className="ease-out duration-100 bg-green-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md border border-green-500 hover:bg-transparent hover:text-green-500 hover:scale-105">
                  Add ticket
               </button>
            </Link>
         </div>
      </div>
   )
}