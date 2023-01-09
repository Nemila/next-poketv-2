import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="body2">Made By Lamine Diamoutene</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
