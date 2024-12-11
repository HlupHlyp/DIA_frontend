import { FC } from "react";
import "./ItemCard.css";
import default_img from "../../assets/DefaultImage.jpg";
import { dest_img } from "../../../target_config";

interface ICardProps {
  img_link: string;
  item_name: string;
  short_description: string;
  item_cost: number;
  item_id: number;
  ItemDetailedHandler: () => void;
}

export const ItemCard: FC<ICardProps> = ({
  img_link,
  item_name,
  short_description,
  item_cost,
  ItemDetailedHandler,
}) => {

  return (
    <div className="plant_req">
      <img src={dest_img + img_link.replaceAll("minio", "solar-energy") || default_img} className="image" />
      <div className="info">
        <div className="title">{item_name}</div>
        <div className="short-description">{short_description.replaceAll('!', '\n')}</div>
        <div className="cost" >{item_cost} р.</div>
      </div>
      <div className="down">
        <a onClick={ItemDetailedHandler} className="descript-button">ПОДРОБНЕЕ</a>
      </div>
    </div>
  );
};
