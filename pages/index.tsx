import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Menu_list from "../components/menulist";

const Home: NextPage = () => {
  return (
    <main id="main_container" className="w-screen flex flex-col">
      <Header />
      <Menu_list />
    </main>
  );
};

export default Home;
