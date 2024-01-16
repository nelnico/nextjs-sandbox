import { Product } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

export const useProducts = (
  pageSize: number,
  pageNumber: number,
  query: string
) => {
  // calculate skip and take from pageSize and pageNumber
  const skip = pageSize * (pageNumber - 1);
  const take = pageSize;

  let url = `/api/products?skip=${skip}&take=${take}&query=${query}`;
  const { data, error, isLoading, isFetching } = useQuery<Product[]>(
    ["products", pageNumber, pageSize, query],
    async () => axios.get(url).then(({ data }) => data)
  );

  return { data, error, isLoading, isFetching };
};
