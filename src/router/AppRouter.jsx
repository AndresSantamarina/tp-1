import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Menu from "../components/common/Menu";
import Footer from "../components/common/Footer";
import HeroesDetails from "../pages/HeroesDetails";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes className="mainSection">
        <Route path="/" element={<Inicio />}></Route>
        <Route
          path="/Marvel"
          element={<Inicio publisher={"Marvel Comics"} />}
        ></Route>
        <Route path="/DC" element={<Inicio publisher={"DC Comics"} />}></Route>
        <Route path="/:heroe" element={<HeroesDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
