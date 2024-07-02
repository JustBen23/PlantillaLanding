import { AnimacionDePagina } from "./AnimacionDePagina";

export const Home = () => {
  return (
    <AnimacionDePagina>
      <header>
        <h1>Empresa de lavado de dinero :D</h1>
      </header>
      <main>
        <section className="contenedor_tarjetas">
          <article className="tarjeta">
            <h3>Articulo 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusantium ipsum fuga veritatis facilis? Mollitia, modi illum
              excepturi sapiente fuga maiores eligendi facere quaerat ratione,
              natus culpa maxime praesentium rerum.
            </p>
          </article>
          <article className="tarjeta">
            <h3>Articulo 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusantium ipsum fuga veritatis facilis? Mollitia, modi illum
              excepturi sapiente fuga maiores eligendi facere quaerat ratione,
              natus culpa maxime praesentium rerum.
            </p>
          </article>
          <article className="tarjeta">
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
