import React, { FunctionComponent, memo } from 'react';
import { requestGreetings } from '../../services/greetings.service';

interface IProps {
    text: string;
}

const GreetingsButton: FunctionComponent<IProps> = memo(({ text }) => {
    const onClick = async () => {
        const res = await requestGreetings();
        alert(res);
    };

    return (
        <button className="btn btn-primary" onClick={onClick}>
            {text}
        </button>
    );
});

export default GreetingsButton;
