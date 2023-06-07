import { createQuestion } from "./util/question.js";
import { saveContact } from "./util/save.js";
import listContact from "./util/list.js";
import process from "process";

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

  default:
    break;
}
