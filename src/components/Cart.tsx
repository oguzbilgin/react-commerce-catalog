import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { useCartContext } from "../context/CartContext"
import { useState } from "react";

export default function Cart() {
  const {cart, removeFromCart} = useCartContext();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Typography>Cart: {cart.length}</Typography>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{width: 200}}>
          <Typography variant="h6" color="primary" sx={{display:'flex', justifyContent:'center', mt: 4}}>Your Cart</Typography>
          {
            cart.length === 0 ? (
              <Typography sx={{mt: 4, display:'flex', justifyContent:'center'}} noWrap>No items in the cart</Typography>
            ) : (
              cart.map((item,index) => {
                return (
                  <Box key={`${item.id}-${index}`} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Typography noWrap>{item.title}</Typography>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(item);
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                )
              })
            )
          }
        </Box>
      </Drawer>
    </>
  )
}