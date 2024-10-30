import { MOCK_TICKETS, deleteTicketById } from "./MOCK";

export const getTickets = () => {
   return MOCK_TICKETS;
}

export const deleteTicket = (id) => {
   return deleteTicketById(id);
};