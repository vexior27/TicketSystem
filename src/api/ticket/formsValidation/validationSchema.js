import {z} from 'zod';

export const ticketSchema = z.object({
   title: z.string().min(1, {message: 'Tittle is required'}).max(100, 'Title must be less than 100 characters'),
   description: z.string().min(1, {message: 'Description is required'}).max(500, 'Title must be less than 500 characters')
})