import server from "../../db/db.json";

export const getAllProducts = async () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res(server.products), 500);
  });

  const products = await promise;

  return { products };
};
