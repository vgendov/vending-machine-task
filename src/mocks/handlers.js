import { http, HttpResponse } from "msw";

const products = [
  {
    name: "Twix",
    price: 1.1,
    quantity: 10,
    image: "/images/twix.jpg",
  },
  {
    name: "Snickers",
    price: 1.2,
    quantity: 8,
    image: "/images/snickers.jpg",
  },
  {
    name: "Crackers",
    price: 1,
    quantity: 12,
    image: "/images/crackers.jpg",
  },
  {
    name: "Salty Sticks",
    price: 0.5,
    quantity: 13,
    image: "/images/salty-sticks.jpg",
  },
  {
    name: "Water",
    price: 0.6,
    quantity: 15,
    image: "/images/water.jpg",
  },
  {
    name: "Coca-Cola",
    price: 0.8,
    quantity: 4,
    image: "/images/coca-cola.jpg",
  },
];

export const handlers = [
  http.get("https://localhost:3000/fetch-products", () => {
    return HttpResponse.json(products);
  }),
];
