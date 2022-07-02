import PropTypes from 'prop-types';
import { ContactListContainer } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
     <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactListContainer>
            {name}: {number}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </ContactListContainer>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}