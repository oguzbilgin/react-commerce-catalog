import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../types/products";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

type ProductCardProps = {
  product: Product;
}

export default function ProductCard ({product}: ProductCardProps) {
  const {addToCart} = useCartContext();
  return (
    <Card sx={{width:250, textDecoration: 'none'}} component={Link} to={`/products/${product.id}`}>
      <CardMedia component="img" src={product.thumbnail} alt={product.title} sx={{height: 180, objectFit:'contain'}} />
      <CardContent>
        <Typography variant="h6" noWrap>{product.title}</Typography>
        <Typography color="text.secondary" noWrap>{product.description}</Typography>
        <Typography color="text.secondary">${product.price}</Typography>
      </CardContent>
      <Button 
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
      >
          Add to Cart
        </Button>
    </Card>
  )
}