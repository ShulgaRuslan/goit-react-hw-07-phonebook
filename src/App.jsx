import { ContactForm } from './components/ContactForm';
import { ContactsList } from './components/ContactsList';
import { ContactsFilter } from './components/ContactsFilter';

import styles from './App.module.css';

export const App = () => {
  return (
    <>
      <div className={styles.section}>
        <h1 className={styles.title}>Phonebook</h1>
      </div>
      <ContactForm />
      <div className={styles.section}>
        <h2 className={styles.title}>Contacts</h2>
      </div>
      <ContactsFilter />
      <ContactsList />
    </>
  );
};
