import cn from "@/helpers/cn";

type InputProps = {
  label?:            string,
  type?:             string,
  placeholder?:      string,
  className?:        string,
  wrapperClassName?: string,
}

export const Input = ({
  label,
  type,
  placeholder,
  className,
  wrapperClassName,
}: InputProps) => {
  return (
    <div className={cn("relative select-none", wrapperClassName)}>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          'peer p-4 border border-black bg-transparent rounded-md text-xs text-black placeholder:text-black placeholder:text-opacity-50 focus:outline-none focus:border-white transition-all',
          className,
        )}
      />

      <label className='block absolute -top-2 left-4 px-4 bg-primary text-black peer-focus:text-white text-sm transition-all'>
        { label }
      </label>
    </div>
  )
}
