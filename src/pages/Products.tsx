import {
  Box,
  CircularProgress,
  Container,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { BASE_URL, ITEMS_PER_PAGE } from "../constants/constants";
import useFetch from "../hooks/useFetch";
import { type ProductResponse } from "../types/products";
import ProductCard from "../components/ProductCard";
import { useDebounce } from "../hooks/useDebounce";
import Cart from "../components/Cart";
import { useProductList, type sortTypes } from "../hooks/useProductList";

export default function Products() {
  const { data, loading, error } = useFetch<ProductResponse>(
    `${BASE_URL}?limit=10`
  );

  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<sortTypes>("title");

  const debouncedQuery = useDebounce(query, 500);
  const products = Array.isArray(data?.products) ? data.products : [];

  const { paginatedProducts, totalCount } = useProductList({
    products,
    query: debouncedQuery,
    sort,
    page,
  });

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  if (!data) {
    return <Typography>No products to show</Typography>;
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          mb: 2,
          alignItems: "center",
        }}
      >
        <TextField
          label="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value as sortTypes)}
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="price-asc">Price Asc</MenuItem>
          <MenuItem value="price-desc">Price Desc</MenuItem>
        </Select>

        <Cart />
      </Container>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {paginatedProducts.length === 0 ? (
          <Typography>No results found</Typography>
        ) : (
          paginatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </Container>

      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
        }}
        count={Math.ceil(totalCount / ITEMS_PER_PAGE)}
        page={page}
        onChange={(_, value) => setPage(value)}
      />
    </>
  );
}
