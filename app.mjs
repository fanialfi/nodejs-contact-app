import * as readline from "readline/promises";
import process from "process";
import validator from "validator";

const options = {
  input: process.stdin,
  output: process.stdout,
};

const input = readline.createInterface(options);

let nama = await input.question("Masukkan nama anda : ");
while (
  !validator.isLength(nama.trim(), {
    min: 8,
    max: undefined,
  })
) {
  nama = await input.question("panjang nama anda minimal harus 8 karakter : ");
}

let mobilePhone = await input.question("Masukkan nomor telephone anda : ");
while (!validator.isMobilePhone(mobilePhone, "id-ID")) {
  mobilePhone = await input.question(
    "Masukkan nomor telephone anda dengan benar : "
  );
}

let email = await input.question("Masukkan email anda : ");
while (!validator.isEmail(email)) {
  email = await input.question("Masukkan email anda dengan benar : ");
}

const contact = {
  nama,
  telphone: mobilePhone,
  email,
};

console.table(contact);
input.close();
