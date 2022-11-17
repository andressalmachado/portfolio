import Banner from "../src/components/Banner";
import Card from "../src/components/Card";
import Menu from "../src/components/Menu";
import Separador from "../src/components/Separador";
import Sobre from "../src/components/Sobre";

function HomePage() {
  return (
    <>
      <Menu />
      <Banner />
      <Separador text="Sobre mim" />
      <Sobre />
      <Separador text="Projetos" />
      <Card />
      <Separador text="Conhecimento e experiência" />

      <div>
        Ícones feitos por{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/br/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
}

export default HomePage;
