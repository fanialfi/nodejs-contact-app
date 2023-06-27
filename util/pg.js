import pkg from "pg";
import "dotenv/config";
const { Client } = pkg;
import chalk from "chalk";

const client = new Client();

export default async function pgConnection(query, data) {
  return new Promise(async (resolve, reject) => {
    try {
      await client.connect();
      const result = await client.query(query, data);
      resolve(result);
    } catch (error) {
      console.log(chalk.red.bold("gagal konek"));
      reject(chalk.red.bold(error.message));
    } finally {
      await client.end();
    }
  });
}
