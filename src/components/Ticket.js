import { useState, useEffect } from "react"

export default function Ticket() {

   const [tickets, setTickets] = useState([
      { id: '1', title: 'First Ticket', description: 'This is the first ticket' },
      { id: '2', title: 'Second Ticket', description: 'This is the second ticket' },
   ]);

   const [newTitle, setNewTitle] = useState('')
   const [newDescription, setNewDescription] = useState('');
   const [editId, setEditId] = useState(null);

   // fetch ticket by id
   const fetchTicketById = (id) => {
      return tickets.find(ticket => ticket.id === id);
   };

   // add new ticket
   const addTicket = () => {
      if (newTitle !== '' && newDescription !== '') {
         const newTicket = {
            id: tickets.length + 1,
            title: newTitle,
            description: newDescription
         }
         setTickets([...tickets, newTicket]);
         setNewTitle('');
         setNewDescription('');
      }
   }

   // update ticket
   const updateTicketById = (id) => {
      if (newTitle !== '' && newDescription !== '') {
         setTickets(
            tickets.map(ticket =>
               ticket.id === id ? { ...ticket, title: newTitle, description: newDescription } : ticket
            )
         );
      }
      setNewTitle('');
      setNewDescription('');
      setEditId(null);
   };

   // delete ticket
   const deleteTicketById = (id) => {
      setTickets(tickets.filter(ticket => ticket.id !== id));
   };


   return (
      <div>
         <h1 className="text-4xl m-5">Ticket List</h1>
         <div className="ticket__container ">
            <ul className="flex flex-col items-center gap-5">
               {tickets.map(ticket => (
                  <li key={ticket.id} className="ticket bg-gray-50 w-1/3 rounded-md border border-gray-100 p-10">
                     <h3 className="font-medium text-xl">{ticket.title}</h3>
                     <p className="mb-2">{ticket.description}</p>
                     <button className="edit__button ease-out duration-100 bg-black text-white pl-5 pr-5 pt-2 pb-2 rounded-md mr-2 border border-black hover:bg-transparent hover:text-black hover:scale-105" onClick={() => {
                        setEditId(ticket.id);
                        setNewTitle(ticket.title);
                        setNewDescription(ticket.description);
                     }}>Edit</button>
                     {/* delete ticket */}
                     <button className="delete__button ease-out duration-100 bg-red-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md border border-red-500 hover:bg-transparent hover:text-red-500 hover:scale-105" onClick={() => deleteTicketById(ticket.id)}>Delete</button>
                  </li>
               ))}
            </ul>
         </div>
         <div className="ticket__form p-10">
            <h2 className="text-4xl mb-5">{editId ? 'Edit Ticket' : 'Add New Ticket'}</h2>
            <div className=" mr-auto ml-auto flex w-1/4 gap-5  items-center flex-col justify-center">
               <input
                  type="text"
                  placeholder="Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2 bg-gray-50 border-gray-100 border rounded-md"
               />
               <input
                  type="text"
                  placeholder="Description"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full p-2 bg-gray-50 border-gray-100 border rounded-md"
               />
               <button onClick={() => {
                  if (editId) {
                     updateTicketById(editId);
                  } else {
                     addTicket();
                  }
               }}
                  className="delete__button ease-out duration-100 bg-green-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md border border-green-500 hover:bg-transparent hover:text-green-500 hover:scale-105"
               >
                  {editId ? 'Update Ticket' : 'Add Ticket'}
               </button>
            </div>
         </div>
      </div>
   );
}