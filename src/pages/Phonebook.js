// import { Component } from 'react';
import s from './Phonebook.module.css';
import Form from '../components/Forms/Form';
import TodoList from '../components/Todolist/Todolist';
import Filter from '../components/Filter/Filter';
import { useFetchContactQuery } from '../redux/app/operation';

function Phonebook() {
  const { data: contactApi } = useFetchContactQuery();
  return (
    <div>
      <Form contact={contactApi} />
      <Filter contact={contactApi} />
      {/* <TodoList contact={contactApi} /> */}
      {contactApi && <TodoList contact={contactApi} />}
    </div>
  );
}

export default Phonebook;
