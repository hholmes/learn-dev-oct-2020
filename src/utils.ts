import faker from "faker";

export const randomRole = () => {
  return faker.random.arrayElement(["user", "user", "admin"]);
};

export default { randomRole };
