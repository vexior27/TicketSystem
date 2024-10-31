import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTicket } from "../api/ticket/addTicket";

import { Input, Textarea, Button, Title } from "@mantine/core";

import { toast } from "react-hot-toast";

export default function AddTicket() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if (title && description) {
      addTicket({ title, description, date });
      toast.success("Successfully added new ticket!");
      navigate("/"); // Przekierowanie na stronę główną po dodaniu ticketu
    } else {
      toast.error("Tytuł i opis są wymagane!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Title align="center" m="xs">
        Add New Ticket
      </Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/3">
        <label className="font-medium text-lg flex flex-col gap-1">
          Title
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="font-medium text-lg flex flex-col gap-1">
          Description
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <Button type="submit" color="green" w={150}>
          Add ticket
        </Button>
      </form>
    </div>
  );
}
