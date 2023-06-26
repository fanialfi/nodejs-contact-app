import fs from "fs";
import { resolve } from "path";

if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
}
const pathJson = resolve("./", "data/data.json");

async function saveContact(contact) {
  let contacts = [];
  if (fs.existsSync(pathJson)) {
    contacts = JSON.parse(await fs.promises.readFile(pathJson));
  }

  try {
    contacts.push(contact);
    await fs.promises.writeFile(pathJson, JSON.stringify(contacts));
    console.log("sucess add contact to database");
  } catch (error) {
    console.log("error add contact to database");
  }
}

export { saveContact };
