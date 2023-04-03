import ItemList from './ItemList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux-store/contactsSlice';

import style from './NumberList.module.css';

function NumberList() {
  const list = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter.toLowerCase());
  const dispatch = useDispatch();

  const visibleContact = list
    ? list.filter(contact => contact.name.toLowerCase().includes(filter))
    : '';

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
                dispatch(deleteContact(e.id));
              }}
            />
          );
        })}
      </ul>
    </>
  );
}

export default NumberList;
