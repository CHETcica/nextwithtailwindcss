import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Login from "./login";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <Login/>
    </>
  );
};

export default Home;
