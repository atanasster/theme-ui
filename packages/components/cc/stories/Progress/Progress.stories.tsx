import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Progress, ProgressProps } from '../../../../components';


export default {
  title: 'components/Progress',
  component: Progress,
  description: 'Progress variants can be defined anywhere in the `theme` object.',
  category: 'Input',
} as Document;

export const overview: Example<ProgressProps> = ({ value }) => <Progress value={value} max={100} />;

overview.controls = {
  value: { type: ControlTypes.NUMBER, value: 50, min: 0, max: 100 },
};
