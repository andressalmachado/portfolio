import Banner from "../src/components/Banner";
import Menu from "../src/components/Menu";

function HomePage() {
  return (
    <>
      <Menu />
      <Banner />
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
