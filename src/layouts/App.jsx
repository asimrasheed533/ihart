import { Head } from "@modules";
import { Outlet } from "react-router-dom";
import Footer from "../compounts/Footer";
import Header from "../compounts/Header";

export default function App() {
  return (
    <>
      <Head
        title="Remixer"
        image="/favicon.svg"
        url="https://vitefilerouter.com"
        description="Remixer"
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
