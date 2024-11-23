import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import "./ItemCard.css";
import image from "../../assets/DefaultImage.jpeg";

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
    <Card className="card">{/*                          // изображение по умолчанию   */}
      <Card.Img className="cardImage" variant="top" src={img_link || image} height={100} width={100} />
      <Card.Body>
        <div className="textStyle">
          <Card.Title>{item_name}</Card.Title>
        </div>
        <div className="textStyle">
          <Card.Text>
            {short_description}
          </Card.Text>
        </div>
        <Button className="cardButton" href={"http://127.0.0.1:7000/" + item_id + "/"} target="_blank" variant="primary">Открыть в ITunes</Button>
      </Card.Body>
    </Card>
  );
};