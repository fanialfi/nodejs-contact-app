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

  contacts.push(contact);

  await fs.promises.writeFile(pathJson, JSON.stringify(contacts));
}

export { saveContact };
