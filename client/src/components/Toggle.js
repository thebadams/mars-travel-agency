import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const Toggle = ({children}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <Button onClick={() => setToggle(!toggle)}>
            {toggle ? children : ''}
        </Button>
    )
}

export default Toggle;