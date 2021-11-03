// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the CRUD operations on the configuration settings.
 * @azsdk-weight 100
 */
import { AppConfigurationClient } from "@azure/app-configuration";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

export async function main() {
  console.log(`Running helloworld sample`);

  // Set the following environment variable or edit the value on the following line.
  const connectionString =
    process.env["APPCONFIG_CONNECTION_STRING"] || "<connection string>";
  const client = new AppConfigurationClient(connectionString);

  const greetingKey = `harshan-${Math.ceil(Math.random() * 1000 + 1000)}`;

  // creating a new setting
  console.log(`Adding in new setting ${greetingKey}`);
  await client.addConfigurationSetting({ key: greetingKey, value: "Hello!" });
}

main().catch((err) => {
  console.error("Failed to run sample:", err);
  process.exit(1);
});
