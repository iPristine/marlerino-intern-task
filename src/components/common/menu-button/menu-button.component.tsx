import React, { FC } from 'react';

type TMenuButtonProps = {
  icon: JSX.Element,
  children: JSX.Element,
  onClick: () => void,
  selected: boolean
}

export const MenuButton: FC<TMenuButtonProps> = ({icon, children, onClick, selected}) => {
  return (
    <div onClick={onClick} className="menu-button">
      {icon}
      {children}
    </div>
  )
};
