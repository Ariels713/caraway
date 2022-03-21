import { motion } from "framer-motion";
import GlobalStyles from "../styles/GlobalStyle.js";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  );
}

export default MyApp;
