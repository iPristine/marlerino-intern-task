import React, { FC } from 'react';
import cn from 'classnames';
import './card-template.style.sass';

type TMenuButtonProps = {
  children: JSX.Element,
  className?: string
}

export const CardTemplate: FC<TMenuButtonProps> = ({children, className}) => {
  return (
    <div className={cn("card-template", className)}>
      {children}
    </div>
  )
};
