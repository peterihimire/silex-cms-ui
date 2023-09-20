import React from "react";
import HomeHero from "./hero";
import OneWallet from "./oneWallet";

import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboord - Silex</title>
      </Helmet>

      <HomeHero />
      <OneWallet />
    </HelmetProvider>
  );
};

export default HomePage;
