let contacts = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    address: "456 Elm St",
  },
];

export const getContacts = () => [...contacts];

export const addContact = (contact) => {
  contact.id = contacts.length + 1;
  contacts.push(contact);
};

export const deleteContact = (id) => {
  contacts = contacts.filter((contact) => contact.id !== id);
};

export const getContactById = (id) =>
  contacts.find((contact) => contact.id === id);

export const searchContacts = (email) =>
  contacts.filter((contact) => contact.email.includes(email));
