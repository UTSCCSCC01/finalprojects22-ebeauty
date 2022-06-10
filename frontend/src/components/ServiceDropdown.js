
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";


const ServiceDropdown = () => {
    const [list, setList] = useState(["Barbering", "Eyelash Tech", "Hairdressing", "House Cleaning",
        "Landscaping", "Makeup", "Massage", "Nail Tech"
    ]);
    const [service, setService] = useState(list[0]);

    return (
        <div>
            <DropdownButton id="dropdown-btn" title={service} >
                {list.map((item, key) => (
                    <Dropdown.Item as="button" key={key} onClick={(e) => setService(e.target.textContent)}>{item}</Dropdown.Item>
                ))}
            </DropdownButton>
        </div>

    );


};



export default ServiceDropdown;