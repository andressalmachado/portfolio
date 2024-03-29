import Banner from "../src/components/Banner";
import Card from "../src/components/Card";
import Conhecimento from "../src/components/Conhecimento";
import Footer from "../src/components/Footer";
import Menu from "../src/components/Menu";
import Separador from "../src/components/Separador";
import Sobre from "../src/components/Sobre";

function HomePage() {
  return (
    <>
      <Menu />
      <Banner />
      <Sobre />
      <Separador text="Conhecimento e experiência" />
      <Conhecimento />
      <Separador text="Projetos" id="projetos" />
      <Card />
      <Footer />
    </>
  );
}

export default HomePage;
