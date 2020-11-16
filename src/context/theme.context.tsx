import React from 'react';

export enum ThemeType {
  Green = 'green',
  Black = 'black'
}

export const ThemeContext = React.createContext(ThemeType.Green);

