import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'contactsStorage/contactsAPI';

import styles from './ContactsListItem.module.css';

export const ContactsListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li id={id} className={styles.item}>
      <span className={styles.name}>{name}</span>: {number}
      <button
        className={styles.button}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
