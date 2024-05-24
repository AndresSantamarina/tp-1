import { useState, useEffect } from "react";
import HeroesCard from "../components/HeroesCard";
import { Container, Row } from "react-bootstrap";
import constants from "../Constants/constants.js";

const Inicio = ({ publisher }) => {
  const [superHeroes, setSuperHeroes] = useState([]);

  useEffect(() => {
    if (publisher) {
      const listaHeroes = constants.filter((h) => h.publisher === publisher);
      setSuperHeroes(listaHeroes);
    } else {
      setSuperHeroes(constants);
    }
  }, [publisher]);

  return (
    <>
      <section>
        <h1 className="text-center display-5 my-3">Superhéroes</h1>
      </section>
      <section className="mainSection">
        <Container>
          <Row>
            {superHeroes.map((heroe, index) => (
              <HeroesCard key={index} heroe={heroe} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Inicio;
