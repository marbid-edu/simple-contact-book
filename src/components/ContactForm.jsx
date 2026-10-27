
import { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError('Name and Email are required.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    onAddContact({
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim()
    });

    setName('');
    setEmail('');
    setPhone('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Add New Contact</h2>

      <label htmlFor="name">Name *</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <label htmlFor="email">Email *</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
      />

      {error && <p className="error" role="alert">{error}</p>}

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
