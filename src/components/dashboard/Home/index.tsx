import React from "react";
import Counts from "./counts";

import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboord - Silex</title>
      </Helmet>

      <Counts />
    </HelmetProvider>
  );
};

export default HomePage;
