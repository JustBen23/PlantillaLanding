import { AnimacionDePagina } from "./AnimacionDePagina";
import { useEffect } from "react";
import { Header } from "./Header";
import { Cards } from "./Cards";

import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <AnimacionDePagina>
      <Header />
      <Cards />
    </AnimacionDePagina>
  );
};
