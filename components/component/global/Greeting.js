import { useState, useEffect } from 'react';

const Greeting = () => {
  const [message, setMessage] = useState('Welcome Again');

  useEffect(() => {
    const currentTime = new Date();
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };

    const currentTimeWithAMPM = currentTime.toLocaleTimeString(
      undefined,
      timeOptions
    );

    if (
      (Number(currentTimeWithAMPM.split(':')[1]) > 1 &&
        Number(currentTimeWithAMPM.split(':')[1]) <= 5) ||
      (Number(currentTimeWithAMPM.split(':')[1]) > 5 &&
        Number(currentTimeWithAMPM.split(':')[1]) <= 12)
    ) {
      setMessage(
        currentTimeWithAMPM.split(' ')[1] === 'am'
          ? 'Sweet Dreams!'
          : 'Welcome Again!'
      );
    } else {
      setMessage(
        currentTimeWithAMPM.split(' ')[1] === 'pm'
          ? 'Have A Sunshine Day!'
          : `It's Coffee Time!`
      );
    }
  }, []);

  return message;
};

const PrintGreeting = () => {
  return (
    <article className="text-[#fff] text-[40px] font-bold">
      {Greeting()}
    </article>
  );
};

export default PrintGreeting;
