import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <Link href="/">
            <Button color="light" startIcon={<CatchingPokemon />} size="large">
              PokeTv
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
