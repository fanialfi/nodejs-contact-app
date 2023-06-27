import pgConnection from "./pg.js";
import chalk from "chalk";

export default async function saveContact(contact) {
  try {
    const query =
      "INSERT INTO contacts(nama, telephone, email) VALUES ($1, $2, $3)";
    await pgConnection(query, contact);
    console.log(chalk.green.bold("Sukses menambahkan kontak ke database"));
    return;
  } catch (error) {
    console.log(chalk.red.bold(error));
  }
}
