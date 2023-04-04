import ItemList from './ItemList';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux-store/contactsApi';
import { useSelector } from 'react-redux';

import style from './NumberList.module.css';

function NumberList() {
  const { data, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.contacts.filter.toLowerCase());

  const visibleContact = !isLoading
    ? data.filter(contact => contact.name.toLowerCase().includes(filter))
    : [];

  return (
    <>
      <div className={style.title}>Contacts</div>
      <ul className={style.list}>
        {visibleContact.map(e => {
          return (
            <ItemList
              key={e.id}
              id={e.id}
              name={e.name}
              number={e.number}
              deleteContact={() => {
                deleteContact(e.id);
              }}
            />
          );
        })}
      </ul>
    </>
  );
}

export default NumberList;
