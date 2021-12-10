
import PhoneInput from 'react-phone-number-input'
import "./Reactphone.css"; 
import "../Reactphone/Reactphone.css"
import 'react-phone-number-input/style.css'
import { useState } from "react";

const ReactPhone =() =>{ 
    const [value, setValue] = useState()
    return (
        <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        />
        {value}
        </div>
    );
};

export default ReactPhone;