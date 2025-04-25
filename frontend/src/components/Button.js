import React, { useEffect, useState } from 'react';

const Button = ({ text="Кнопка" }) => {
    const [click, setClick] = useState(0)

    useEffect(() => {
        document.title = `Вы нажали ${click} раз`
    })

    return <button onClick={() => {setClick(click + 1)}}>{text} Клик: {click}</button>;
};

export default Button;
