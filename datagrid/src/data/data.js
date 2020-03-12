import faker from "faker";

faker.seed(731);

const userFake = index => {
  return {
    id: 2321 + index,
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    country: faker.address.country(),
    city: faker.address.city(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    date: faker.date.between("1970-01-01", "2000-01-01")
  };
};

export default Array.apply(null, Array(111)).map((elem, index) =>
  userFake(index)
);
