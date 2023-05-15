import ContectSection from "../compounts/ContectSection";
import Footer from "../compounts/Footer";
import { Head } from "@modules";
import Header from "../compounts/Header";
import { Outlet } from "react-router-dom";

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
      <ContectSection />
      <Footer />
    </>
  );
}
