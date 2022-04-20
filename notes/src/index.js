import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './App';
import App from './App';
import Expenses from './components/expenses';
import Invoices from './components/invoices';
import { Invoice } from './components/invoices';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import Notes from './components/notes';
import LogView from './views/logView'
import SignView from './views/signView';
import NotesView from './views/notesView';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppRouter />}>
        <Route path='login' element={<LogView />} />
        <Route path='signin' element={<SignView />} />
        <Route path='notes' element={<NotesView />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} />
          <Route path=':invoiceId' element={<Invoice />} />
        <Route
        path='*'
        element={
          <main style={{ padding: '1rem'}}>
            <p>There's nothing here!</p>
          </main>
        }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);

