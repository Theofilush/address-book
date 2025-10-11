const dataContacts = [
  {
    id: 1,
    name: "Agus Mulyono",
    email: "agus@example.com",
    phone: "081234567890",
    address: null,
    birthday: null,
    company: "Example Inc.",
    jobTitle: "Software Engineer",
    website: "https://example.com",
  },
];

console.log(dataContacts);

function displayContact(contacts) {
  for (let index = 0; index < contacts.length(); index++) {
    const contact = contacts[index];

    console.log(`
👤 ${contact.name}
📧 ${contact.email}
📞 ${contact.phone}`);
  }
}

function showContacts() {}

displayContact(dataContacts);
