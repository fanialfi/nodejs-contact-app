#!/usr/bin/env node

import { createQuestion } from "./util/question.js";
import { saveContact } from "./util/save.js";
import listContact from "./util/list.js";
import process from "process";
import detailContact from "./util/detail.js";
import deleteContact from "./util/remove.js";
import { Command } from "commander";

const program = new Command();

program
  .name("contacts storage")
  .description("save your contact here")
  .version("1.0.0");

program
  .command("list")
  .description("list all contact in database")
  .action(async () => {
    const buffers = await listContact();
    const contacts = JSON.parse(buffers.toString());

    const listNama = contacts.map((contact) => {
      return contact.nama;
    });

    console.table(listNama);
  });

program
  .command("add")
  .description("add contact to database")
  .option(
    "-a, --all",
    "insert all information to database, name, telephone, email"
  )
  .option("-s, --simple", "insert name and telephone information to database")
  .action(async function (options) {
    if (options.simple) {
      const nama = await createQuestion("name", "masukkan nama anda");
      const telephone = await createQuestion(
        "telephone",
        "masukkan nomor telephone anda"
      );
      saveContact({ nama, telephone });
    } else if (options.all) {
      const nama = await createQuestion("name", "masukkan nama anda");
      const telephone = await createQuestion(
        "telephone",
        "masukkan nomor telephone anda"
      );
      const email = await createQuestion("email", "masukkan email anda");
      saveContact({ nama, telephone, email });
    } else {
      this.help();
    }
  });

program
  .command("detail")
  .description("see detail contact")
  .requiredOption("-c, --contact <string>", "contact for viewing")
  .action(async function (options) {
    if (options.contact) {
      const detail = await detailContact(options.contact.trim());
      console.table(detail);
    } else {
      this.help();
    }
  });

program
  .command("delete")
  .description("delete contact in database")
  .requiredOption("-c, --contact <string>", "contact to delete")
  .action(async function (options) {
    if (options.contact) {
      const del = await deleteContact(options.contact.trim());
      console.log(del);
    } else {
      this.help();
    }
  });
program.parse();
