
export function fetchContacts() {
  return fetch('/api/contacts/')
    .then(res => res.json());
};

export function fetchContactById(id) {
  return fetch(`/api/contacts/${id}`)
    .then(res => res.json());
};

export function addContact(contact) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return fetch('/api/contacts/', {
    method: 'POST',
    headers,
    body: JSON.stringify(contact)
  })
  .then(res => res.json());
};
