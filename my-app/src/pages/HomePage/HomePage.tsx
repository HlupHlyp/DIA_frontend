import "./HomePage.css";
import { FC } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { Header } from "../../components/Header/Header";
import HomeBack from "../../assets/HomePageBack.jpg";


export const HomePage: FC = () => {
  const navigate = useNavigate();

  /*const logoClick = () => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.HOME}`);
  };*/

  const handleClick = () => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.ITEMS}`);
  };

  return (
    <Col md={6} className="space">
      <Header />
      < div className="home_back" >
        <img src={HomeBack} className="home_image" />
        <div className="home_title">
          <h1>Sun StaGeS</h1>
          <div>Добро пожаловать в Sun Station Generation&Saving!</div>
          <div style={{ fontSize: "13px", fontWeight: "500", fontFamily: "Arial" }}>Здесь вы можете провести расчет генерации и сбережения планируемой вами солнечной станции,</div>
          <div>а также ее примерную стоимость.</div>
          <div className="descript-button" onClick={handleClick} style={{ marginTop: "20px" }}>Посмотреть доступные элементы</div>
        </div>
      </div >
    </Col >
  );
};