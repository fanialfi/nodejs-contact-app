import fs from "fs";
import { resolve } from "path";

// cek apakah ada folder data atau tidak
if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
}

const pathJson = resolve("./", "data/data.json");

// function delete contact
async function deleteContact(data) {
  const contacts = JSON.parse(await fs.promises.readFile(pathJson));
  return new Promise((resolve, reject) => {
    try {
      contacts.forEach((contact, index) => {
        if (data == contact.nama) {
          contacts.splice(index, 1);
          fs.promises.writeFile(pathJson, JSON.stringify(contacts));
          resolve("Contact berhasil di hapus");
        } else {
          resolve(`Contact dengan nama : ${data} tidak ada
gagal menghapus contact`);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

export default deleteContact;
