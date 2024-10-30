
import './App.css';

import Ticket from './components/Ticket';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketList from './components/TicketList';
import TicketDetails from './components/TicketDetails';
import AddTicket from './components/AddTicket';
import EditTicket from './components/EditTicket';

import { Swinger } from './components/Swinger';

import {Toaster} from "react-hot-toast"

export default function App() {
  return (
    <>
      <Toaster/>
      <Swinger/>
      <Router>
        <Routes>
          <Route path='/' element={<TicketList/>}/>
          <Route path='/ticket/:id' element={<TicketDetails/>}/>
          <Route path='/add-ticket' element={<AddTicket/>}/>
          <Route path='/edit-ticket/:id' element={<EditTicket/>}/>
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
