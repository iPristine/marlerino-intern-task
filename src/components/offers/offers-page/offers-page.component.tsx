import React, { FC } from 'react';
import { LayoutTemplate } from '../../common/layout-template/layout-template.component';
import { CardTemplate } from '../../common/card-template/card-template.component';
import { Header } from '../../common/header/header.component';

export const OffersPage: FC = () => {
  return (
    <LayoutTemplate>
      <CardTemplate>
        <>OFFERS</>
      </CardTemplate>
    </LayoutTemplate>
  )
};
