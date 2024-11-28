import "./HomePage.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import HomeBack from "../../assets/HomePageBack.jpg";

export class HomePage extends Component {

  componentWillUnmount() {
    console.log("Hi! I'm unmounted.");
  }

  render() {
    return (
      <div className="space" >
        <Header />
        < div className="home_back" >
          <img src={HomeBack} className="home_image" />
          <div className="home_title">
            <h1>Sun StaGeS</h1>
            <div>Добро пожаловать в Sun Station Generation&Saving!</div>
            <div style={{ fontSize: "13px", fontWeight: "500", fontFamily: "Arial" }}>Здесь вы можете провести расчет генерации и сбережения планируемой вами солнечной станции,</div>
            <div>а также ее примерную стоимость.</div>
            <Link to="/items" style={{ marginTop: "20px" }}>
              <div className="descript-button">Посмотреть доступные элементы
              </div>
            </Link>
          </div>
        </div >
      </div >
    );
  }
}