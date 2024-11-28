import { Component } from 'react'
import './InputField.css'
import card_img from "../../assets/card.png";

interface InputProps {
    value: string;
    setValue: (value: string) => void;
    onSubmit: () => void;
    loading?: boolean;
    placeholder?: string;
}

type Props = Readonly<InputProps>;

export class InputField extends Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <div className="top_line">
                <div className="input_back">
                    <input name="search_request" type="text" className="input" value={this.props.value}
                        placeholder={this.props.placeholder} onClick={this.props.onSubmit} onChange={(event => this.props.setValue(event.target.value))} /><br></br>
                </div>
                <div className="plant_req_button">
                    <div>
                        <div className="elements_amount" />
                    </div>
                    <img className="image" src={card_img} />
                </div>
            </div>
        );
    }
}
