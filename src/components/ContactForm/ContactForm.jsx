import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'contactsStorage/contactsAPI';
import Notiflix from 'notiflix';

import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', phone: '' });
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = element => {
    element.preventDefault();
    const data = { id: nanoid(), ...form };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      inputClean();
      return Notiflix.Notify.failure(`${data.name} is already in phonebook`);
    }
    addContact(data);

    inputClean();
  };

  const inputClean = () => {
    setForm({ name: '', phone: '' });
  };

  const { name, phone } = form;

  return (
    <div className={styles.section}>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.button} disabled={isLoading}>
          Add contact
        </button>
      </form>
    </div>
  );
};
