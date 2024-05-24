import { Link, useParams } from "react-router-dom";
import { filterNameHero } from "../Constants/functions";

const HeroesDetails = () => {
  let { heroe } = useParams();

  heroe = filterNameHero(heroe);

  return (
    <>
      <div className="d-flex m-4 justify-content-center">
        <img
          src={heroe[0]?.url}
          alt={heroe[0]?.superhero}
          className="img-fluid w-50"
        />
        <div className="d-flex flex-column justify-content-between">
          <article className="m-3">
            <h1 className="display-2">{heroe[0]?.superhero}</h1>
            <hr />
            <h2>{heroe[0]?.publisher}</h2>
            <br />
            <p> {heroe[0]?.alter_ego} </p>
            <p> {heroe[0]?.first_appearance} </p>
            <p> {heroe[0]?.characters} </p>
          </article>
          <Link className="mx-auto mb-5 btn btn-success" to={"/"}>
            Regresar
          </Link>
        </div>
      </div>
    </>
  );
};
export default HeroesDetails;
