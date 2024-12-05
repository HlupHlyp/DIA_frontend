import { Component } from 'react';
import "./ItemCard.css";
import default_img from "../../assets/DefaultImage.jpg";

interface ICardProps {
  img_link: string;
  item_name: string;
  short_description: string;
  item_cost: number;
  item_id: number;
  ItemDetailed: string;
}

type Props = ICardProps;

export class ItemCard extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <div className="plant_req">
        <img src={this.props.img_link || default_img} className="image" />
        <div className="info">
          <div className="title">{this.props.item_name}</div>
          <div className="short-description">{this.props.short_description.replaceAll('!', '\n')}</div>
          <div className="cost" >{this.props.item_cost} р.</div>
        </div>
        <div className="down">
          <a href={this.props.ItemDetailed} className="descript-button">ПОДРОБНЕЕ</a>
        </div>
      </div>
    );
  }
}

