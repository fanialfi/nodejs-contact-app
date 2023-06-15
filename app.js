import { createQuestion } from "./util/question.js";
import { saveContact } from "./util/save.js";
import listContact from "./util/list.js";
import process from "process";
import detailContact from "./util/detail.js";
import deleteContact from "./util/remove.js";

const mode = process.argv[2];

switch (mode) {
  case "list":
    const buffers = await listContact();
    const contacts = JSON.parse(buffers.toString());

    const listNama = contacts.map((contact) => {
      return contact.nama;
    });

    console.table(listNama);
    break;

  case "add":
    const nama = await createQuestion("name", "masukkan nama anda");
    const telephone = await createQuestion(
      "telephone",
      "masukkan nomor telephone anda"
    );
    const email = await createQuestion("email", "masukkan email anda");
    saveContact({ nama, telephone, email });
    break;

  case "detail":
    const bufferDetail = await listContact();
    const contactsDetail = JSON.parse(bufferDetail.toString());

    const listDetail = contactsDetail.map((contact) => {
      return contact.nama;
    });

    console.table(listDetail);

    const name = await createQuestion(
      "name",
      "masukkan salah satu data di atas"
    );
    const detail = await detailContact(name.trim());
    console.table(detail);
    break;

  case "delete":
    const bufferDelete = await listContact();
    const contactsDelete = JSON.parse(bufferDelete.toString());

    const listDelete = contactsDelete.map((contact) => {
      return contact.nama;
    });

    console.table(listDelete);

    const namaDelete = await createQuestion(
      "name",
      "masukkan salah satu data di atas"
    );
    const del = await deleteContact(namaDelete.trim());
    console.table(del);
    break;
  default:
    console.log(`
perintah tidak di ketahui
berikan argumen ketiga dengan salah satu pilihan berikut :
add
list
detail
delete
`);
    break;
}
