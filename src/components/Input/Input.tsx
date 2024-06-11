import cn from "@/helpers/cn";

export type InputT = 'input' | 'textarea';

type InputProps = {
  label?: string,
  type?: string,
  placeholder?: string,
  className?: string,
  wrapperClassName?: string,
  labelClassName?: string,
  variant?: InputT,
  onChange?: any,
  value?: string,
  id?: string,
  defaultValue?: string,
  name?: string,
}

export const Input = ({
  label,
  type,
  placeholder,
  className,
  wrapperClassName,
  labelClassName,
  variant = "input",
  onChange,
  value,
  id,
  defaultValue,
  name,
}: InputProps) => {
  if (variant === "textarea") {
    return (
      <div className={cn("relative select-none", wrapperClassName)}>
        <textarea
          name={name}
          placeholder={placeholder}
          className={cn(
            'p-4 border border-black bg-transparent rounded-md text-xs text-black placeholder:text-black placeholder:text-opacity-50 focus:outline-none transition-all',
            className,
          )}
          rows={5}
          id={id}
          onChange={onChange}
          value={value}
        />

        <label className={cn('block absolute -top-2 left-4 px-4 bg-primary text-black text-sm transition-all', labelClassName)}>
          {label}
        </label>
      </div>
    )
  }

  return (
    <div className={cn("relative select-none", wrapperClassName)}>
      <input
        name={name}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        className={cn(
          'p-4 border border-black bg-transparent rounded-md text-sm text-black placeholder:text-black placeholder:text-opacity-50 focus:outline-none transition-all',
          className,
        )}
        onChange={onChange}
        value={value}
        id={id}
      />

      <label className={cn('block absolute -top-2 left-4 px-4 bg-primary text-black text-sm transition-all', labelClassName)}>
        {label}
      </label>
    </div>
  )
}
