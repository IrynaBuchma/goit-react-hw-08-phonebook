import { useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/filterSelector';
import { ContactItem } from './ContactItem';
import propTypes from 'prop-types';
import css from './ContactsList.module.css';

export default function ContactsList() {
    const contacts = useSelector(selectContact);
    const filterValue = useSelector(selectFilter);


    const filteredContacts = (contacts, filterValue) => 
      filterValue
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
        : contacts;

    const filterContacts = filteredContacts(contacts, filterValue);

    return (
        <>
         <ul className={css.list}>
            {filterContacts.map(({ id, name, number }) => (
              <li key={id} className={css.item}>
                <ContactItem key={id} id={id} name={name} number={number}/>
              </li>
            ))}
         </ul>
        </>
    )
}

ContactsList.propTypes = {
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string,
        name: propTypes.string,
        number: propTypes.string,
      }),
    ),
  };