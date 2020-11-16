import React, { FC } from 'react';
import './layout-template.style.sass';
import { MenuBar } from '../menu-bar/menu-bar.component';

type TLayoutTemplateProps = {
  children: JSX.Element
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({children}) => {
  return (
    <div className="layout-template">
      <MenuBar />
      <div className="layout-template__main-container">
        <div className="layout-template__actions">

        </div>
        <div className="layout-template__content">
          {children}
        </div>
      </div>
    </div>
  )
};
