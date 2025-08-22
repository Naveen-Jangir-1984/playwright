import sit from "./Environments/SIT.json";
import stg from "./Environments/STG.json";

export interface User {
  username: string;
  password: string;
  description?: string;
  role?: string;
}

export interface ConfigType {
  baseUrl: string;
  users: { [key: string]: User };
}

const qaConfig: ConfigType = sit;
const stgConfig: ConfigType = stg;

const environment = process.env.TEST_ENV || "stg";
export const config: ConfigType = environment === "qa" ? qaConfig : stgConfig;
