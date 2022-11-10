import { CSSReset } from "../src/CSSReset";
import { Helmet } from "react-helmet";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <html lang="pt-br" />
        <title>Andressa Dev</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Koulen&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CSSReset />
      <Component {...pageProps} />
    </>
  );
}
