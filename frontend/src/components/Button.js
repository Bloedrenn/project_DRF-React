import React, { useState } from 'react';

const Button = ({ text="Кнопка" }) => {
    const [click, setClick] = useState(0)

    return <button onClick={() => {setClick(click + 1)}}>{text} Клик: {click}</button>;
};

export default Button;
