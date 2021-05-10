import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Donut, DonutProps } from '../../../../components';


export default {
  title: 'components/Donut',
  component: Donut,
  description: 'Donut variants can be defined anywhere in the `theme` object.',
  category: 'Display',  
} as Document<DonutProps>;

export const overview: Example<DonutProps> = props => <Donut {...props} />;

overview.controls = {
  value: { type: ControlTypes.NUMBER, value: 0.5 },
  min: { type: ControlTypes.NUMBER, value: 0 },
  max: { type: ControlTypes.NUMBER, value: 1 },
  title: { type: ControlTypes.TEXT, value: 'donut' },
  size: { type: ControlTypes.NUMBER, value: 128 },
  strokeWidth: { type: ControlTypes.NUMBER, value: 2 },
};

overview.smartControls = {
  smart: false
};