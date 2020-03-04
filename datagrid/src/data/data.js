import faker from "faker"

faker.seed(731);

const userFake = (index) => {
  return {
    id: 2321 + index,
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar()
  }
};

export default Array.apply(null, Array(111)).map((elem,index) => userFake(index));
