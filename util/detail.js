import listContact from "./list.js";

async function detailContact(name) {
  const buffers = await listContact();
  const contacts = JSON.parse(buffers.toString());

  const detail = contacts.filter((contact) => {
    if (contact.nama == name) {
      return contact;
    }
  });
  if (detail[0] != undefined) {
    return detail[0];
  } else {
    return "contact tidak di temukan";
  }
}

export default detailContact;
