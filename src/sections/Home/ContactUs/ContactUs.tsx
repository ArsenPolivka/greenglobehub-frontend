import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { InputT } from "@/components/Input/Input";
import { ContainerNoSSR } from "@/components/Layout"

export const ContactUs = () => {
  const formInputs = [
    {
      label: 'Ім\'я',
      placeholder: 'Введіть ім\'я'
    },
    {
      label: 'Email',
      placeholder: 'Введіть email'
    },
    {
      label: 'Запитання',
      placeholder: 'Введіть своє запитання',
      variant: 'textarea'
    }
  ];

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

      <form action="" className="w-full md:max-w-96 space-y-4">
        {formInputs.map(({ label, placeholder, variant }, index) => (
          <Input
            key={index}
            label={label}
            placeholder={placeholder}
            className="w-full"
            labelClassName="bg-main-white"
            variant={variant as InputT}
          />
        ))}

        <Button type="submit" className="w-full">Відправити</Button>
      </form>
    </ContainerNoSSR>
  )
}
