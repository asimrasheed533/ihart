import { Head } from "@modules";
import { Outlet } from "react-router-dom";
import Footer from "../compounts/Footer";
import Header from "../compounts/Header";

export default function App() {
  return (
    <>
      <Head
        title="Ihart"
        image="/ihart.png"
        url="https://vitefilerouter.com"
        description="Ihart is a website for the people who want to learn about the art of the world."
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
