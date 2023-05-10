import "@/styles/globals.css";
import State from "@/context/state";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <State>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </State>
  );
}
