import Form from '../Forms/Form';
import TodoList from '../Todolist/TestList';
import Filter from '../Filter/Filter';
import { useFetchContactQuery } from '../../redux/app/operation';
export default function Phonebook() {
  const { data: contactApi } = useFetchContactQuery();
  return (
    <container>
      <Form contact={contactApi} />
      <Filter contact={contactApi} />
      {contactApi && <TodoList contact={contactApi} />}
    </container>
  );
}
