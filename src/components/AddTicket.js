import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTicket } from '../api/ticket/addTicket';

import {toast} from "react-hot-toast"

export default function AddTicket() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        if (title && description) {
            addTicket({ title, description, date});
            toast.success('Successfully added new ticket!')
            navigate('/');  // Przekierowanie na stronę główną po dodaniu ticketu
        } else {
            toast.error('Tytuł i opis są wymagane!');
        }
    };

    return (
        <div className='flex flex-col items-center gap-5'>
            <h1 className='text-4xl mt-10 text-center'>Add New Ticket</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-1/3'>
                <label className='font-medium text-lg flex flex-col gap-1'>
                    Title
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        className='ease-out duration-100 text-md font-normal p-2 bg-transparent focus:border-b-green-400 focus:outline-none border-gray-100 border-b-2 placeholder:font-normal' 
                    />
                </label>
                <label className='font-medium text-lg flex flex-col gap-1'>
                    Description
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className='ease-out duration-100 font-normal p-2 bg-transparent text-md focus:border-b-green-400 focus:outline-none border-gray-100 border-b-2 placeholder:font-normal' 
                    />
                </label>
                <button 
               type='submit' 
               className="ease-out duration-100 bg-green-500 text-white pl-5 pr-5 pt-2 pb-2 rounded-md border border-green-500 hover:bg-transparent hover:text-green-500 hover:scale-105 w-1/3"
               >
               Add ticket
            </button>
            </form>
        </div>
    );
}
