import { FC } from 'react'
import { Button } from 'react-bootstrap'
import './InputField.css'

interface Props {
    value: string
    setValue: (value: string) => void
    onSubmit: () => void
    loading?: boolean
    placeholder?: string
    buttonTitle?: string
}

export const InputField: FC<Props> = ({ value, setValue, onSubmit, loading, placeholder, buttonTitle = 'Искать' }) => (
    <div className="top_line">
        <div className="input_back">
            <input name="search_request" type="text" className="input" value={value} placeholder={placeholder} onClick={onSubmit} onChange={(event => setValue(event.target.value))} /><br></br>
        </div>
        <div className="plant_req_button">
            <a href="/plant_req/2">
                <div className="elements_amount">9</div>
            </a>
            <img className="image" src="http://127.0.0.1:9000/solar-energy/card.png" />
        </div>
    </div>
)
