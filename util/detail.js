import listContact from "./list.js";

async function detailContact(name) {
  const buffers = await listContact();
  const contacts = JSON.parse(buffers.toString());

  const detail = contacts.filter((contact) => {
    if (contact.nama == name) {
      return contact;
    }
  });
  return detail[0];
}

export default detailContact;
