import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroesCard = ({ heroe }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="text-center">
        <Card.Img variant="top" src={heroe.url} className="imgHeroes" />
        <Card.Body>
          <Card.Title>{heroe.superhero}</Card.Title>
          <Card.Subtitle>{heroe.alter_ego}</Card.Subtitle>
          <Card.Text>{heroe.first_appearance}</Card.Text>
          <Link className="btn btn-success mt-4" to={`/${heroe.superhero}`}>
            Ver más
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HeroesCard;
