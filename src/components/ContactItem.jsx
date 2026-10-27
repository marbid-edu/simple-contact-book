
function ContactItem({ contact, onDeleteContact }) {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>Email: {contact.email}</p>

        {contact.phone && (
          <p>Phone: {contact.phone}</p>
        )}
      </div>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ContactItem;
