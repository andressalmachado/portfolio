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
      <Separador text="Sobre mim" />
      <Sobre />
      <Separador text="Conhecimento e experiência" />
      <Conhecimento />
      <Separador text="Projetos" />
      <Card />
    </>
  );
}

export default HomePage;
