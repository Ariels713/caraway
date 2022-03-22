import Head from "next/head";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caraway Demo</title>
        <meta name="description" content="Created by Ariel Rodriguez" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Button />
    </>
  );
}
