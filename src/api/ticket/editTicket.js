import { MOCK_TICKETS } from "./MOCK"

export const editTicket = (id, updatedTicket) => {
   const ticketIndex = MOCK_TICKETS.findIndex(ticket => ticket.id === id);
   if(ticketIndex !== -1) {
      MOCK_TICKETS[ticketIndex] = {...MOCK_TICKETS[ticketIndex], ...updatedTicket};
      return true;
   }
   else {
      return false;
   }
};