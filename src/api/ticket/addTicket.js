import { MOCK_TICKETS } from "./MOCK";

export const addTicket = (ticketData) => {
    // Znajdź najwyższe istniejące id i zwiększ je o 1
    const newId = (MOCK_TICKETS.length > 0) 
        ? String(Math.max(...MOCK_TICKETS.map(ticket => Number(ticket.id))) + 1) 
        : '1';

    // Dodaj nowy ticket z wygenerowanym id do tablicy MOCK_TICKETS
    const newTicket = { id: newId, ...ticketData };
    MOCK_TICKETS.push(newTicket);

    return newTicket;
};