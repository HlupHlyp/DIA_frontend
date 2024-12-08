import { FC } from 'react'
import { Button } from 'react-bootstrap'
import './Header.css'
import card_img from "../../assets/card.png";
import { Card } from "react-bootstrap";
import LogoImage from "../../assets/Logo.jpg";

interface Props {
    onSubmit: () => void
}

export const Header: FC<Props> = ({ onSubmit }) => (
    <div className="header">
        <div onClick={onSubmit} className="image_box">
            <img src={LogoImage} className="image" />
        </div>
    </div>
)
