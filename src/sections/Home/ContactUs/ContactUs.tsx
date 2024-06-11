'use client';

import { sendEmail } from "@/api/email";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InputT } from "@/components/Input/Input";
import { ContainerNoSSR } from "@/components/Layout";
import { useState } from "react";

export const ContactUs = () => {
  const formInputs = [
    {
      label: 'Ім\'я',
      placeholder: 'Введіть ім\'я',
      name: 'name'
    },
    {
      label: 'Email',
      placeholder: 'Введіть email',
      name: 'email'
    },
    {
      label: 'Запитання',
      placeholder: 'Введіть своє запитання',
      variant: 'textarea',
      name: 'question'
    }
  ];

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Form Values:', formValues);

    try {
      const payload = {
        to: formValues.email,
        subject: 'Contact Us Form Submission',
        content: formValues.question,
        recipientName: formValues.name
      };

      const response = await sendEmail(payload);

      console.log(response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  return (
    <ContainerNoSSR className="md:flex justify-between space-y-10 md:gap-20">
      <div className="space-y-4 md:space-y-10">
        <h2 className={`text-h2-mobile lg:text-h2 uppercase color-main-black`}>
          Маєте запитання? Напишіть нам
        </h2>

        <p className="md:max-w-96">
          Якщо у вас є будь-які питання або ви потребуєте додаткової інформації, будь ласка, зв&apos;яжіться з нами. Ми завжди раді допомогти вам! <br/><br/>
          Заповніть форму, і наші фахівці зв&apos;яжуться з вами найближчим часом.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:max-w-96 space-y-4">
        {formInputs.map(({ label, placeholder, variant, name }, index) => (
          <Input
            key={index}
            label={label}
            placeholder={placeholder}
            className="w-full"
            labelClassName="bg-main-white"
            variant={variant as InputT}
            name={name}
            onChange={handleInputChange}
          />
        ))}

        <Button type="submit" className="w-full">Відправити</Button>
      </form>
    </ContainerNoSSR>
  )
}
