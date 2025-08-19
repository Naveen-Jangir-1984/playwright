const qaUrl = "https://login.salesforce.com/";
const stgUrl = "https://login.salesforce.com/";

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

const qaConfig: ConfigType = {
  baseUrl: qaUrl,
  users: {
    Admin: {
      role: "Tester",
      username: "manjubharathiraghunathan622@agentforce.com",
      password: "sanasarra@15",
    },
  },
};

const stgConfig: ConfigType = {
  baseUrl: stgUrl,
  users: {
    Admin: {
      role: "Tester",
      username: "manjubharathiraghunathan622@agentforce.com",
      password: "sanasarra@15",
    },
  },
};

const environment = process.env.TEST_ENV || "stg";
export const config: ConfigType = environment === "qa" ? qaConfig : stgConfig;
