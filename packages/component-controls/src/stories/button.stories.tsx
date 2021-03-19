import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Button, ButtonProps } from '../../../components/src';

export default {
  title: 'components/Button',
  component: Button,
  description:
    'Button variants can be defined in the theme.buttons object. The Button component uses theme.buttons.primary as its default variant style.',
  category: 'Input',
} as Document;

export const overview: Example<ButtonProps> = ({ variant }) => (
  <Button variant={variant}>click me</Button>
);

overview.controls = {
  variant: {
    type: ControlTypes.OPTIONS,
    options: ['primary', 'secondary'],
    value: 'primary',
  },
};
