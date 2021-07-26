import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hallo jameda | Things</title>
        <meta
          name="description"
          content="GraphQl demo for jameda Dev-Austausch"
        />
        <link
          rel="icon"
          href="https://jameda-assets.s3.eu-central-1.amazonaws.com/images/favicon/favicon-32x32.png"
        />
      </Head>
      <h1>Some things I like</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
