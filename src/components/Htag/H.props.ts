import {type ReactNode } from "react";
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  uppercase?: boolean;
}