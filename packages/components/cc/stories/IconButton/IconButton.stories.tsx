import React from 'react';
import { Document, Example } from '@component-controls/core';
import { IconButton } from '../../../../components';

export default {
  title: 'components/IconButton',
  component: IconButton,
  category: 'Input',
} as Document;

export const overview: Example = () => (
  <IconButton aria-label='Toggle dark mode'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='currentcolor'>
      <circle
        r={11}
        cx={12}
        cy={12}
        fill='none'
        stroke='currentcolor'
        strokeWidth={2}
      />
    </svg>
  </IconButton>
);
