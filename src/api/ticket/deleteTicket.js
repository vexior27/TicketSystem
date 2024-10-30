
import { MOCK_TICKETS } from "./MOCK"

export const deleteTicket = (id) => {
   MOCK_TICKETS = MOCK_TICKETS.filter(ticket => ticket.id !== id);
   return MOCK_TICKETS;
}