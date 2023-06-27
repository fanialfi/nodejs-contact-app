import pgConnection from "./pg.js";
import chalk from "chalk";

// function delete contact
export default async function deleteContact(data) {
  const query = "DELETE FROM contacts WHERE nama = $1";
  const resolv = await pgConnection(query, [data]);

  if (resolv.rowCount > 0) {
    return `${chalk.green.bold("kontak dengan nama :")} ${chalk.red.bold(
      data
    )} ${chalk.green.bold("berhasil dihapus dari database")}`;
  } else {
    return `${chalk.green.bold(
      "gagal menghapus kontak, kontak dengan nama :"
    )} ${chalk.red.bold(data)} ${chalk.green.bold(
      "tidak ada didalam database"
    )}`;
  }
}
