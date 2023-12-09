import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import MainPage from "./Playground";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}

      <Component {...pageProps} />
      {/* <MainPage /> */}

      {/* <MainPage /> */}
    </>
  );
}
