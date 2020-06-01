import React, { FC, memo } from 'react';
import { requestGreetings } from '~/client/services/greetings-service';

interface IProps {
  text: string;
}

const GreetingsButton: FC<IProps> = memo(({ text }) => {
  const onClick = async () => {
    const res = await requestGreetings();
    console.log(res);
  };

  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
});

export default GreetingsButton;
