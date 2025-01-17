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
import NewView from './views/newView';
import EditView from './views/editView';
import EditNote from './components/editNote';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
    
    <Route path='login' element={<LogView />} />
    <Route path='notes' element={<NotesView />} />
    <Route path='signin' element={<SignView />} />
    <Route path='addNote' element={<NewView />} />
    <Route path='editNote/:id' element={<EditView />} />
      {/* <Route path='/' element={<AppRouter />}> */}
        
        
        
      {/* </Route> */}
    </Routes>
  </BrowserRouter>,
);

