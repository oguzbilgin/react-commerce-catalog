import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/products";
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";

export default function ProductDetails () {
  const {id} = useParams<{id: string}>();
  const {data, loading, error} = useFetch<Product>(`${BASE_URL}/${id}`);

  if (loading) {
    return (
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'60vh'}}>
        <CircularProgress />
      </Box>
    )
  };

  if (error) {
    return <Typography>{error}</Typography>
  };

  if (!data) {
    return <Typography>No products to show</Typography>
  };

  const imgSrc = data.images[0] || data.thumbnail;
  return (
    <>
    <Card>
      <CardMedia component="img" src={imgSrc} alt={data.title} sx={{height: 300, objectFit:'contain'}} />
      <CardContent>
        <Typography variant="h6" noWrap>{data.title}</Typography>
        <Typography color="text.secondary" noWrap>{data.description}</Typography>
        <Typography color="text.secondary">${data.price}</Typography>
      </CardContent>
    </Card>
    <Button component={Link} to="/products">Go back</Button>
    </>

  )
}