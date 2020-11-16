import React, { FC } from 'react';
import { ReactComponent as LanguageIcon} from './assets/lang-en.svg';
import { ReactComponent as NightModeIcon} from './assets/night-mode.svg';
import './header.style.sass';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__right-panel">
        <NightModeIcon />
        <LanguageIcon />
      </div>
    </header>
  )
};
