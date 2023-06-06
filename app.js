import { createQuestion } from "./util/question.js";
import { saveContact } from "./util/save.js";

const nama = await createQuestion("name", "masukkan nama anda");
const telephone = await createQuestion(
  "telephone",
  "masukkan nomor telephone anda"
);
const email = await createQuestion("email", "masukkan email anda");

const contact = {
  nama,
  telephone,
  email,
};
saveContact(contact);
