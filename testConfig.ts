const qaUrl = "";
const stgUrl = "https://www.saucedemo.com/";

export interface User {
  username: string;
  password: string;
  description?: string;
  role?: string;
};

export interface ConfigType {
  baseUrl: string;
  users: { [key: string]: User };
};

const qaConfig: ConfigType = {
  baseUrl: qaUrl,
  users: {
    Standard: {
      role: "Tester",
      username: "standard_user",
      password: "secret_sauce",
    }
  }
};

const stgConfig: ConfigType = {
  baseUrl: stgUrl,
  users: {
    StandardUser: {
      role: "Tester",
      username: "standard_user",
      password: "secret_sauce",
    },
    ProblemUser: {
      role: "Tester",
      username: "problem_user",
      password: "secret_sauce",
    },
    LockedUser: {
      role: "Tester",
      username: "locked_out_user",
      password: "secret_sauce",
    }
  }
};

const environment = process.env.TEST_ENV || "stg";
export const config: ConfigType = environment === "qa" ? qaConfig : stgConfig;
