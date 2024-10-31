import { useState, useEffect } from "react";
import { getTickets, deleteTicket } from "../api/ticket/getTickets";
import { Link } from "react-router-dom";

import { Card, Button, Group, Text, Flex, Title } from "@mantine/core";

import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTickets = filteredTickets.sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "dateAsc") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOption === "dateDesc") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const allTickets = getTickets();
    setTickets(allTickets);
  }, []);

  const deleteTicketById = (id) => {
    const updatedTickets = deleteTicket(id);
    setTickets(updatedTickets);
  };

  return (
    <div className="bg-gray">
      <Title m="xs" align="center">
        Ticket List
      </Title>
      <div className="ticket__container flex flex-col items-center justify-start gap-4">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <SortDropdown sortOption={sortOption} onSortChange={handleSortChange} />
        <ul className="flex flex-col items-center gap-5 w-full">
          {sortedTickets.map((ticket) => (
            <Card
              key={ticket.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="w-1/3"
            >
              <Link to={`/ticket/${ticket.id}`}>
                <Text fw={500}>{ticket.title}</Text>
                <Text mb="xs">{ticket.description}</Text>
              </Link>
              <Flex
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
                gap="xs"
              >
                <Link to={`/edit-ticket/${ticket.id}`}>
                  <Button variant="filled">Edit</Button>
                </Link>
                <Button
                  variant="filled"
                  color="red"
                  onClick={() => deleteTicketById(ticket.id)}
                >
                  Delete
                </Button>
              </Flex>
            </Card>
          ))}
        </ul>
      </div>
      <div className="btn__container flex items-center justify-center p-10">
        <Link to="/add-ticket">
          <Button variant="filled" color="green">
            AddTicket
          </Button>
        </Link>
      </div>
    </div>
  );
}
