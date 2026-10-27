
import ContactItem from './ContactItem';

function ContactList({ contacts, searchTerm, onDeleteContact }) {
  if (contacts.length === 0) {
    return (
      <p className="empty-message">
        No contacts yet. Add one above!
      </p>
    );
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return (
      <p className="empty-message">
        No matches found for "{searchTerm}".
      </p>
    );
  }

  return (
    <div className="contact-list">
      <h2>My Contacts ({filteredContacts.length})</h2>

      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
}

export default ContactList;
