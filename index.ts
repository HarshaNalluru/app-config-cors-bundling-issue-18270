// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates the CRUD operations on the configuration settings.
 * @azsdk-weight 100
 */
import { AppConfigurationClient } from "@azure/app-configuration";
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-base";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { ZoneContextManager } from "@opentelemetry/context-zone";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const provider = new WebTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

provider.register({
  // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
  contextManager: new ZoneContextManager(),
});

async function main() {
  // Set the following environment variable or edit the value on the following line.
  const connectionString =
    process.env["APPCONFIG_CONNECTION_STRING"] || "<connection string>";

  const client = new AppConfigurationClient(connectionString);
  await client.addConfigurationSetting({
    key: `key-${Math.ceil(Math.random() * 1000 + 1000)}`,
    value: "Hello!",
  });
}

main().catch((err) => {
  console.error("Failed to run sample:", err);
});
