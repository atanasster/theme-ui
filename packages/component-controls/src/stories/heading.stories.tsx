import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Heading, HeadingProps } from '../../../components/src';

export default {
  title: 'components/Heading',
  component: Heading,
  category: 'Typography',
} as Document;

export const overview: Example<HeadingProps> = ({ as }) => (
  <Heading as={as}>heading text</Heading>
);

overview.controls = {
  as: {
    type: ControlTypes.OPTIONS,
    options: ['h1', 'h2', 'h3', 'h4', 'h5' ],
    value: 'h1',
  },
};
