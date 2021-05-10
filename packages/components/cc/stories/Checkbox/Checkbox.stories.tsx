import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Checkbox, CheckboxProps } from '../../../../components';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  description:
    'Checkbox variants can be defined in `theme.forms` and the component uses the `theme.forms.checkbox` variant by default.',
  category: 'Input',  
} as Document;

export const overview: Example<CheckboxProps> = ({ checked }) => <Checkbox defaultChecked={checked} />;

overview.controls = {
  checked: { type: ControlTypes.BOOLEAN, value: true },
};
