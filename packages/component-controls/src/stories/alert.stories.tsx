import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Alert, Close, Flex, Text } from '../../../components/src';

export default {
  title: 'components/Alert',
  component: Alert,
  category: 'Display'
} as Document;

export const overview: Example = () => (
  <Alert variant="primary">
    <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Text sx={{
        //safari fix:
        WebkitTextFillColor: 'white',
      }}>some alert text</Text>
      <Close />
    </Flex>
  </Alert>
);
