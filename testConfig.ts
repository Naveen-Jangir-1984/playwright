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
    "Anita Jangir": {
      username: "anitajangir86-l1p1@force.com",
      password: "AJ14011986",
    },
  },
};

const stgConfig: ConfigType = {
  baseUrl: stgUrl,
  users: {
    "Anita Jangir": {
      role: "Tester",
      username: "anitajangir86-l1p1@force.com",
      password: "AJ14011986",
    },
  },
};

const environment = process.env.TEST_ENV || "qa";
export const config: ConfigType = environment === "qa" ? qaConfig : stgConfig;
