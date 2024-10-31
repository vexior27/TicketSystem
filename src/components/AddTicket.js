import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTicket } from "../api/ticket/addTicket";
import { Input, Textarea, Button, Title } from "@mantine/core";
import { toast } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketSchema } from "../api/ticket/formsValidation/validationSchema";

export default function AddTicket() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ticketSchema),
  });

  const onSubmit = async (data) => {
    try {
      await addTicket({ ...data, date: new Date() });
      toast.success("Successfully added new ticket!");
      navigate("/"); // Przekierowanie na stronę główną po dodaniu ticketu
    } catch (error) {
      toast.error("Failed to add ticket.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Title align="center" m="xs">
        Add New Ticket
      </Title>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-1/3">
        <label className="font-medium text-lg flex flex-col gap-1">
          Title
          <Input
            type="text"
            {...register('title')}
            error={errors.title?.message}
            required
          />
        </label>
        <label className="font-medium text-lg flex flex-col gap-1">
          Description
          <Textarea
            {...register('description')}
            error={errors.description?.message}
          />
        </label>
        <Button type="submit" color="green" w={150}>
          Add ticket
        </Button>
      </form>
    </div>
  );
}
