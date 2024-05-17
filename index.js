const contact = require("./contacts.js");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contact.listContacts();
      break;

    case "get":
      contact.getContactById(id);
      break;

    case "add":
      contact.addContact(name, email, phone);
      break;

    case "remove":
      contact.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
