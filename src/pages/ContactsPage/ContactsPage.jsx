import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoader, selectContact, selectError } from 'redux/contacts/selectors';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import css from './ContactsPage.module.css';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoader);
    const contacts = useSelector(selectContact);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
      <>
        <div className={css.section}>
            <h1>Phonebook</h1>
            <ContactForm/>
            {isLoading && !error && <b>Request in progress...</b>}
        </div>
        {contacts.length ? (
        <div className={css.section}>
            <h2>Contacts</h2>
            <Filter/>
            <ContactsList/>
        </div>
        ) : null}
      </>
    )
};
