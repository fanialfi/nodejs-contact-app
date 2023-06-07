import fs from "fs";
import { resolve } from "path";

// cek apakah ada folder data atau tidak
if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
}

const pathJson = resolve("./", "data/data.json");

async function listContact() {
  return new Promise((resolve, reject) => {
    try {
      resolve(fs.promises.readFile(pathJson));
    } catch (error) {
      reject(error);
    }
  });
}

export default listContact;
