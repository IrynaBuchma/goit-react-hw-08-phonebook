import { useSelector, useDispatch } from 'react-redux';
import { selectContact } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/filterSelector'
import { deleteContact } from 'redux/contacts/operations';
import propTypes from 'prop-types';
import css from './ContactsList.module.css';

export default function ContactsList() {
    const contacts = useSelector(selectContact);
    const filterValue = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onDeleteBtn = (id) => dispatch(deleteContact(id));

    const filteredContacts = (contacts, filterValue) => 
      filterValue
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
        : contacts;

    const filterContacts = filteredContacts(contacts, filterValue);

    return (
        <>
         <ul className={css.list}>
            {filterContacts.map(({ id, name, number }) =>(
              <li key={id} className={css.item}>
                <p className={css.name}>{name}</p>
                <p className={css.number}>{number}</p>
                <button type="button" onClick={() => onDeleteBtn(id)}>Delete</button>
              </li>
            ))}
         </ul>
        </>
    )
}

ContactsList.propTypes = {
    onDeleteBtn: propTypes.func,
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string,
        name: propTypes.string,
        number: propTypes.string,
      }),
    ),
  };