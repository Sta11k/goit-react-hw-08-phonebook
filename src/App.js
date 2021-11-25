import { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Phonebook } from './components/Container/Phonebook';
// import Form from './components/Forms/Form';
// import TodoList from './components/Todolist/Todolist';
// import Filter from './components/Filter/Filter';
// import {
//   useFetchContactQuery,
//   // useAddContactsMutation,
//   // useDeleteContactsMutation,
// } from '../src/redux/app/operation';
export default function App() {
  // const { data: contactApi } = useFetchContactQuery();
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/phonebook">Phonebook</Link>
            </li>
          </ul>
        </nav>
        {/* <Form contact={contactApi} />
        <Filter contact={contactApi} />
        {contactApi && <TodoList contact={contactApi} />} */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Component />} />
          <Route path="/login" element={<Component />} />
          <Route path="/register" element={<Component />} />
          <Route path="/phonebook" element={<Component />} />
        </Routes>
      </main>
    </div>
  );
}
