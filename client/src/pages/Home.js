import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FixedBG from '../components/FixedBG';
import Footer from '../components/Footer';
import ScrollAnimation from '../components/ScrollAnimation';

const Home = () => {
  return (
      <>
        <Hero />
        <Header />
        <ScrollAnimation />
        <FixedBG />
        <Footer />
      </>
  )
};

export default Home;