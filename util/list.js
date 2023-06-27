import pgConnection from "./pg.js";
import chalk from "chalk";

export default async function listContact() {
  const query = "SELECT nama, telephone, email FROM contacts";
  const resolve = await pgConnection(query);

  if (resolve.rows.length < 1) {
    return chalk.red.bold("tidak ada kontak yang tersedia di database");
  } else {
    return resolve.rows;
  }
}
