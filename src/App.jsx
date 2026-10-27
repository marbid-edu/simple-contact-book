
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  // Store all contacts
  const [contacts, setContacts] = useState([]);

  // Store the search text
  const [searchTerm, setSearchTerm] = useState('');

  // Add a new contact
  const addContact = (newContact) => {
    setContacts((previousContacts) => [
      ...previousContacts,
      newContact
    ]);
  };

  // Delete a contact using its ID
  const deleteContact = (id) => {
    setContacts((previousContacts) =>
      previousContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>Simple Contact Book</h1>
        <p>Keep your contacts organized in one place.</p>
      </header>

      <main>
        <section className="form-section">
          <ContactForm onAddContact={addContact} />
        </section>

        <section className="contacts-section">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ContactList
            contacts={contacts}
            searchTerm={searchTerm}
            onDeleteContact={deleteContact}
          />
        </section>
      </main>

      <footer>
        <p>Simple Contact Book | React Project</p>
      </footer>
    </div>
  );
}

export default App;

