import { useMemo } from "react";
import type { Product } from "../types/products";
import { ITEMS_PER_PAGE } from "../constants/constants";

export type sortTypes = "price-asc" | "price-desc" | "title";

interface UseProductListArgs {
  products: Product[];
  query: string;
  sort: sortTypes;
  page: number;
}

export function useProductList({
  products,
  query,
  sort,
  page,
}: UseProductListArgs) {

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    if(!normalizedQuery) return products;
    return products.filter(product => {
      return product.title.trim().toLowerCase().includes(normalizedQuery);
    })
  }, [products, normalizedQuery]);

    const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a,b) => {
      switch(sort) {
        case 'price-asc' :
          return a.price - b.price;
        case 'price-desc' :
          return b.price - a.price;
        default :
          return a.title.localeCompare(b.title);
      }
    })
  }, [filteredProducts, sort]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedProducts, page]);

  return {paginatedProducts, totalCount: filteredProducts.length}
}