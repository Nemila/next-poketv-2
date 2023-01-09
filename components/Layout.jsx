import React from "react";
import Navbar from "./Navbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./Footer";
import Head from "next/head";

const theme = createTheme({
  palette: {
    mode: "dark",
    light: {
      main: "#eee",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>PokeTv | By Lamine</title>
        <meta
          name="description"
          content="PokeTv - Just another place to watch free anime"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
