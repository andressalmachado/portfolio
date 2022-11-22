import Banner from "../src/components/Banner";
import Card from "../src/components/Card";
import Conhecimento from "../src/components/Conhecimento";
import Menu from "../src/components/Menu";
import Separador from "../src/components/Separador";
import Sobre from "../src/components/Sobre";

function HomePage() {
  return (
    <>
      <Menu />
      <Banner />
      <Separador text="Conhecimento e experiência" />
      <Conhecimento />
      <Separador text="Sobre mim" id="sobre" />
      <Sobre />
      <Separador text="Projetos" id="projetos" />
      <Card />
    </>
  );
}

export default HomePage;
