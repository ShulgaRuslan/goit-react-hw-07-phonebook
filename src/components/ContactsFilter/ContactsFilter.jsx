import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'contactsStorage/contactsSlice';

import styles from './ContactsFilter.module.css';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onChange = element => {
    dispatch(changeFilter(element.currentTarget.value));
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Find contacts by name</h2>
      <input
        className={styles.input}
        onChange={onChange}
        value={filter}
      ></input>
    </div>
  );
};
