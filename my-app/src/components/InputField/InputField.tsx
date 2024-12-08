import { FC } from 'react'
import { Button } from 'react-bootstrap'
import './InputField.css'
import card_img from "../../assets/card.png";
import { Card } from "react-bootstrap";

interface Props {
    value: string
    setValue: (value: string) => void
    onSubmit: () => void
    loading?: boolean
    placeholder?: string
}

export const InputField: FC<Props> = ({ value, setValue, onSubmit, placeholder }) => (
    <div className="top_line">
        <div className="input_back">
            <input name="search_request" type="text" className="input" value={value} placeholder={placeholder} onClick={onSubmit} onChange={(event => setValue(event.target.value))} /><br></br>
        </div>
        <div className="plant_req_button">
            <div>
                <div className="elements_amount" />
            </div>
            <img className="image" src={card_img} />
        </div>
    </div>
)
