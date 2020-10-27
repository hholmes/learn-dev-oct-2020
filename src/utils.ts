import faker from "faker";

export const randomRole = () => {
  return faker.random.arrayElement(["user", "user", "user", "editor", "admin"]);
};

export default { randomRole };
