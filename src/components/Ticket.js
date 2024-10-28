import {useState} from "react"

export default function Ticket() {
      const [tickets, setTickets] = useState([
         { id: '1', title: 'First Ticket', description: 'This is the first ticket' },
         { id: '2', title: 'Second Ticket', description: 'This is the second ticket' },
     ]);
     
     return (
         <div>
             <h1>Ticket List</h1>
             <ul>
                 {tickets.map(ticket => (
                     <li key={ticket.id}>
                         <h3>{ticket.title}</h3>
                         <p>{ticket.description}</p>
                     </li>
                 ))}
             </ul>
         </div>
     );
}