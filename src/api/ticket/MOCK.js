
export const MOCK_TICKETS = [
   { id: '1', title: 'First Ticket', description: 'This is the first ticket', date: new Date('2023-10-15')},
   { id: '2', title: 'Second Ticket', description: 'This is the second ticket', date: new Date('2023-10-25')},
]

export const deleteTicketById = (id) => {
   MOCK_TICKETS = MOCK_TICKETS.filter(ticket => ticket.id !== id);
   return MOCK_TICKETS;
};