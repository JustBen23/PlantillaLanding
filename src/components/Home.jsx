import { AnimacionDePagina } from "./AnimacionDePagina";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <AnimacionDePagina>
      <header>
        <div className="header_pagina">
          <div className="foto_perfil"><img src="../media/img/an_perfil2.png" alt="" /></div>
          <h1 className="presentacion">Alejandro Nelson</h1>
          <img className="fondo" src="../media/img/fondo_header.png" alt="" />
        </div>
      </header>
      <main>
        <section className="contenedor_tarjetas">
          <article
            className="tarjeta"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="850"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <h3>Articulo 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusantium ipsum fuga veritatis facilis? Mollitia, modi illum
              excepturi sapiente fuga maiores eligendi facere quaerat ratione,
              natus culpa maxime praesentium rerum.
            </p>
          </article>
          <article
            className="tarjeta"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1050"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <h3>Articulo 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusantium ipsum fuga veritatis facilis? Mollitia, modi illum
              excepturi sapiente fuga maiores eligendi facere quaerat ratione,
              natus culpa maxime praesentium rerum.
            </p>
          </article>
          <article
            className="tarjeta"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1250"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <h3>Articulo 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusantium ipsum fuga veritatis facilis? Mollitia, modi illum
              excepturi sapiente fuga maiores eligendi facere quaerat ratione,
              natus culpa maxime praesentium rerum.
            </p>
          </article>
        </section>

      

        <section>
          <article>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
          </article>
        </section>
      </main>
    </AnimacionDePagina>
  );
};
