import type { InputProps } from './Input.props';

const Input = ({ error, placeholder, logo, ...props }: InputProps) => {
  return (
    <div className="flex flex-col justify-center gap-[3px]">
      <div className="flex items-center gap-[12px] py-[16px] px-[12px] relative">
        <img src={logo} alt='Логотип'/>
        <input 
          placeholder = {placeholder}
          {...props}
           className='w-full text-[16px] text-[#555C60] border-none outline-none bg-transparent shadow-none focus:border-none focus:outline-none focus:ring-0'
        />
      </div>
      {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default Input