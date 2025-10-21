import {  type JSX } from 'react';
import cn from 'classnames';
import type { HeadingProps } from './H.props';
export const H = ({ 
  tag, 
  children, 
  uppercase = false,
  ...props
}: HeadingProps): JSX.Element => {

  switch (tag) {
    case 'h1':
      return (
        <h1 
          className={cn("")} 
          {...props}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 
          className={cn("text-black text-[30px] sora  tracking-[0]", {
            "uppercase": uppercase,
           
          })} 
          {...props}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 
          className={cn("")} 
          {...props}
        >
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};