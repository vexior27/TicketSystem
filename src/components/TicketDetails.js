import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Button, Group, Text, Flex, Title } from "@mantine/core";

import { getTicket } from '../api/ticket/getTicket';

export default function TicketDetails() {
   
   const { id } = useParams();
   const [ticket, setTicket] = useState(null);

   useEffect( () => {
      setTicket(getTicket(id));
   }, [id])

   if(!ticket) {
      return <p>Error: ticket wasn't found!</p>
   }

   return (
      <div className='flex flex-col items-center gap-5'>
         <Title 
            m='xs'
            align='center'
         >
            Ticket details
         </Title>
         <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="w-1/3"
         >
            <Text fw={500}>ID: <span className='font-normal'>{ticket.id}</span></Text>
            <Text fw={500}>Title: <span className='font-normal'>{ticket.title}</span></Text>
            <Text fw={500}>Description: <span className='font-normal'>{ticket.description}</span></Text>
            <Text fw={500}>Date: <span className='font-normal'>{ticket.date.toLocaleDateString()}</span></Text>
         </Card>
      </div>
   );
}