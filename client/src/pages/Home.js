import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FixedBG from '../components/FixedBG';
import Footer from '../components/Footer';

const Home = () => {
  return (
      <>
        <Hero />
        <Header />
        <FixedBG />
        <Footer />
      </>
  )
};

export default Home;