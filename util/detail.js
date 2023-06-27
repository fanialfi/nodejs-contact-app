import pgConnection from "./pg.js";
import chalk from "chalk";

export default async function detailContact(name) {
  const query = `SELECT nama, telephone, email FROM contacts WHERE nama = $1`;
  const resolve = await pgConnection(query, [name]);

  if (resolve.rows.length < 1) {
    return `${chalk.green.bold("kontak dengan nama : ")} ${chalk.red.bold(
      name
    )} ${chalk.green.bold("tidak tersedia didalam database")}`;
  } else {
    return resolve.rows;
  }
}
