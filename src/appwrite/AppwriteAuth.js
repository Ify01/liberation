import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6470c080abb74d8ec4b0");

export const account = new Account(client);




