import { useState, useEffect } from 'react';

const Greeting = () => {
  const [message, setMessage] = useState('Welcome Again');

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setMessage('Have a Sunshine Day!');
    } else if (currentHour >= 12 && currentHour < 17) {
      setMessage('Welcome Again!');
    } else if (currentHour >= 17 && currentHour < 20) {
      setMessage("It's Coffee Time!");
    } else {
      setMessage('Have a Sweet Dream!');
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
