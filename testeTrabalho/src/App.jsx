import "./App.css";
import Sobre from "./components/Sobre"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Galeria2 from "./components/Galeria2";
import Lista from "./components/Lista";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Galeria />
      <Galeria2 />
      <Lista nome={"Pedro"} idade={"14"} escola={"Escola SESI"}/>
    </>
  );
}

export default App;
