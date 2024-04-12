import React, { useState } from 'react';

function ContactManager() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Uwera Anick', email: 'uwera@gmail.com' },
    { id: 2, name: 'Samantha Umwali', email: 'umwali@gmail.com' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setSelectedContact(null);
  };

  const handleUpdateContact = (contact) => {
    setSelectedContact(contact);
    // navigate to the update page
  };

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => handleContactClick(contact)}>
            {contact.name}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            <button onClick={() => handleUpdateContact(contact)}>Update</button>
          </li>
        ))}
      </ul>
      {selectedContact && (
        <div>
          <h2>{selectedContact.name}</h2>
          <p>{selectedContact.email}</p>
          <button onClick={() => handleDeleteContact(selectedContact.id)}>Delete</button>
          {/* navigate to the update page */}
        </div>
      )}
    </div>
  );
}

export default ContactManager;