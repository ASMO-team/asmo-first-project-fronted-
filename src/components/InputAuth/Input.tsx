import cn from 'classnames'
import type { InputProps } from './Input.props'

const Input = ({ error , ...props }: InputProps) => {
  return (
    <div className="w-full">
      <input 
        className={cn(
          'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors',
          {
          
            'border-red-500 focus:border-red-500 focus:ring-red-200': error,
            'border-gray-300 focus:border-blue-500 focus:ring-blue-200': !error
          }
        )}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default Input