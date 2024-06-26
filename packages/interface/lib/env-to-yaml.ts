import { writeFileSync } from "fs";
import path from "path";

import { config } from "dotenv";
import yaml from "js-yaml";

config();

const userUrl = process.env.USER_URL;
const accountUrl = process.env.ACCOUNT_URL;

const composeConfig = {
  subgraphs: {
    id: {
      routing_url: userUrl,
      schema: { subgraph_url: userUrl },
    },
    ums: {
      routing_url: accountUrl,
      schema: { subgraph_url: accountUrl },
    },
  },
};

const CONFIG_FILE_NAME = "supergraph.yaml";
const configFilePath = path.resolve(__dirname, "../" + CONFIG_FILE_NAME);

try {
  writeFileSync(configFilePath, yaml.dump(composeConfig), "utf8");
  console.log("Wrote", CONFIG_FILE_NAME);
} catch (error) {
  console.error(error);
}
