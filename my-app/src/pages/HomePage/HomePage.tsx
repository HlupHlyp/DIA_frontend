import "./HomePage.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { Header } from "../../components/Header/Header";
import HomeBack from "../../assets/HomeBack.jpg";
import React from "react";
//import BackgroundImage from 'react-background-image';


export const HomePage: FC = () => {
  const navigate = useNavigate();

  const logoClick = () => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.HOME}`);
  };
  return (
    //<Container>
    //<Row>
    <Col md={6} className="space">
      <Header
        onSubmit={logoClick}
      />
      <div className="image" style={{ backgroundImage: `url(${HomeBack})`, width: 10000}} >
        <h1>Itunes Music</h1>
        <p>
          Добро пожаловать в Itunes Music! Здесь вы можете найти музыку на
          любой вкус.
        </p>
        <Link to={ROUTES.ITEMS}>
          <Button variant="primary">Посмотреть доступные элементы</Button>
        </Link>
      </div>

    </Col >
    //</Row>
    //</Container>
  );
};