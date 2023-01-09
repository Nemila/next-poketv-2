import { CssBaseline } from "@mui/material";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-MDC3VE61EB"
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config',
          'G-MDC3VE61EB');`}
      </Script>
    </Layout>
  );
}
