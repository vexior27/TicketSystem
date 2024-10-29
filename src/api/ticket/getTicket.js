
import { MOCK_TICKETS } from "./MOCK"

export const getTicket = (id) => {
   return MOCK_TICKETS.find(ticket => ticket.id === id);
}