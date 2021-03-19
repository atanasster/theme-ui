import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { Embed, EmbedProps } from '../../../components/src';


export default {
  title: 'components/Embed',
  component: Embed,
  category: 'Media',
} as Document;

export const overview: Example<EmbedProps> = ({ src }) => (
  <Embed src={src} />
);

overview.controls = {
  src: { type: ControlTypes.TEXT, value: 'https://www.youtube.com/embed/GNCd_ERZvZM', data: false }
}