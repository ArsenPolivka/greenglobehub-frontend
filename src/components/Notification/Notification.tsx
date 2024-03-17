type NotificationProps = {
  title: string;
  text: string;
};

export const Notification = ({ title, text }: NotificationProps) => {
  return (
    <div className='bg-secondary p-4 pr-16 w-full max-w-lg absolute right-0 top-4'>
      <h2 className='font-light text-xs uppercase mb-2'>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
