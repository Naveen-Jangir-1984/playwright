import qaEnv from "./Environments/qaEnvironment.json";
import stgEnv from "./Environments/stgEnvironment.json";

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

const qaConfig: ConfigType = qaEnv;
const stgConfig: ConfigType = stgEnv;

const environment = process.env.TEST_ENV || "stg";
export const config: ConfigType = environment === "qa" ? qaConfig : stgConfig;
