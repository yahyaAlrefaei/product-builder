import { faker } from "@faker-js/faker";
import { IProduct } from "../interfaces";

export const generateProducts = (count = 10): IProduct[] => {
  return Array.from({ length: count }, () => ({
    id: faker.number.int(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.number.int(5000),
    color: [faker.color.rgb(), faker.color.rgb(), faker.color.rgb()],
    image: faker.image.urlPicsumPhotos(),
    seller: {
      id: faker.number.int(),
      name: faker.person.firstName(),
      avatar: faker.image.avatar(),
    },
  }));
};

export const products = generateProducts(20);
