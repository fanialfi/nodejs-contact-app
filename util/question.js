import * as readline from "readline/promises";
import process from "process";
import validator from "validator";

const options = {
  input: process.stdin,
  output: process.stdout,
};

export default async function createQuestion(type, question) {
  const input = readline.createInterface(options);
  let data;
  const questionValid = `${question} : `;
  const questionInvalid = `${question} dengan benar : `;

  switch (type) {
    case "name":
      data = await input.question(questionValid);

      while (
        !validator.isLength(data.trim(), {
          min: 8,
        })
      ) {
        data = await input.question(questionInvalid);
      }
      break;

    case "telephone":
      data = await input.question(questionValid);

      while (!validator.isMobilePhone(data, "id-ID")) {
        data = await input.question(questionInvalid);
      }
      break;

    case "email":
      data = await input.question(questionValid);

      while (!validator.isEmail(data)) {
        data = await input.question(questionInvalid);
      }
      break;
    default:
      data = await input.question(questionValid);
      break;
  }
  input.close();
  return data.trim();
}
