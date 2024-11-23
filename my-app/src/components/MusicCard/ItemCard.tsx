import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import "./ItemCard.css";
import default_img from "../../assets/DefaultImage.jpeg";

interface ICardProps {
  img_link: string;
  item_name: string;
  short_description: string;
  item_cost: number;
  item_id: number;
}

export const ItemCard: FC<ICardProps> = ({
  img_link,
  item_name,
  short_description,
  item_cost,
  item_id,
}) => {
  return (
    <div className="plant_req">
      <Card.Img variant="top" src={img_link || default_img} className="image" />
      <div className="info">
        <div className="title">{item_name}</div>
        <div className="short-description">{short_description}</div>
        <div className="cost" >{item_cost} р.</div>
      </div>
      <div className="down">
        <a href={"http://127.0.0.1/" + item_id + "/"} className="descript-button">ПОДРОБНЕЕ</a>
      </div>
    </div>
  );
};
