import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Message } from '../../../../components';

export default {
  title: 'components/Message',
  component: Message,
  category: 'Display',
} as Document; 

export const overview: Example = () => <Message>This is just a message for someone to read</Message>;
