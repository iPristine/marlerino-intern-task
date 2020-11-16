import React, { FC } from 'react';
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as PartnersIcon } from './assets/partners.svg';
import './menu-bar.style.sass';
import { MenuButton } from '../menu-button/menu-button.component';

export const MenuBar: FC = () => {
  return (
    <aside className="menu-bar">
      <Logo />
      <MenuButton icon={<PartnersIcon />} onClick={()=>{}} selected>
        <span>Offers</span>
      </MenuButton>
    </aside>
  )
};
