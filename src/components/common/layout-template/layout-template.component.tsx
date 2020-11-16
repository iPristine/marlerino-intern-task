import React, { FC } from 'react';
import './layout-template.style.sass';
import { MenuBar } from '../menu-bar/menu-bar.component';
import { Header } from '../header/header.component';

type TLayoutTemplateProps = {
  children: JSX.Element
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({children}) => {
  return (
    <div className="layout-template">
      <MenuBar className="layout-template__menu-bar" />
      <div className="layout-template__main-container">
        <Header />
        <div className="layout-template__content">
          {children}
        </div>
      </div>
    </div>
  )
};
