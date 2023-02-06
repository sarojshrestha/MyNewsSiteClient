import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <head>
            <link rel="stylesheet" href="/css/style.css" />
        </head>
        <Nav />
        <Component {...pageProps} />
        </>
    );
  };