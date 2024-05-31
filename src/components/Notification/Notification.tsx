import { getRandomAdvice } from "@/helpers/getRandomAdvice";
import { useEffect, useState } from "react";

type NotificationProps = {
  title: string;
  text: string;
};

export const Notification = ({ title, text }: NotificationProps) => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    setAdvice(getRandomAdvice());
  }, []);

  return (
    <div className='bg-secondary p-4 pr-16 w-full max-w-lg lg:absolute right-0 top-4'>
      <h2 className='font-light text-xs uppercase mb-2'>{title}</h2>
      <p>{advice}</p>
    </div>
  )
}
