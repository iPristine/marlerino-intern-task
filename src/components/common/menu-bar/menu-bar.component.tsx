import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as PartnersIcon } from './assets/partners.svg';
import './menu-bar.style.sass';
import { MenuButton } from '../menu-button/menu-button.component';

type TMenuBarProps = {
  className?: string
}

export const MenuBar: FC<TMenuBarProps> = ({className}) => {
  return (
    <aside className={cn('menu-bar', className)}>
      <Logo />
      <MenuButton icon={<PartnersIcon />} onClick={()=>{}} selected>
        <span>Offers</span>
      </MenuButton>
    </aside>
  )
};
