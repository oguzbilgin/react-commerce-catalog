import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout () {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to ="/">Home</Button>
          <Button color="inherit" component={Link} to ="/products">Products</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{mt: 2}}>
        <Outlet />
      </Box>
    </>
  )
}