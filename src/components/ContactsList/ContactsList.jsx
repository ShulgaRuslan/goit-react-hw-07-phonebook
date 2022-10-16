import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'contactsStorage/contactsAPI';
import { ContactsListItem } from './ContactsListItem';

import styles from './ContactsList.module.css';

export const ContactsList = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const items = getContacts();

  return (
    <ul className={styles.section}>
      {isSuccess &&
        items.map(({ id, name, phone }) => (
          <ContactsListItem key={id} id={id} name={name} number={phone} />
        ))}

      {items && items.length === 0 && (
        <span className={styles.text}> No contacts </span>
      )}
    </ul>
  );
};
