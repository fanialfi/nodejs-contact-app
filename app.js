import { createQuestion } from "./util/question.js";

const nama = await createQuestion("name", "masukkan nama anda");
const telephone = await createQuestion(
  "telephone",
  "masukkan nomor telephone anda"
);
const email = await createQuestion("email", "masukkan email anda");

console.table({ nama, telephone, email });
