import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { MenuButton, MenuButtonProps } from '../../../components/src';

export default {
  title: 'components/MenuButton',
  component: MenuButton,
  category: 'Input',
} as Document;

export const overview: Example<MenuButtonProps> = ({ variant }) => (
  <MenuButton variant={variant} />
);

overview.controls = {
  variant: {
    type: ControlTypes.OPTIONS,
    options: ['primary', 'secondary'],
    value: 'primary',
  },
};
