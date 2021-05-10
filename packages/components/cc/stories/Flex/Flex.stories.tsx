import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { ThemeUICSSProperties } from '@theme-ui/css/src';
import { Flex, Box } from '../../../../components';

export default {
  title: 'components/Flex',
  component: Flex,
  description:
    'The Flex component is identical to the Box component, but with display: flex set. If you need to alter the display property, use the Box component instead.',
  category: 'Containers',      
} as Document;

export const overview: Example<ThemeUICSSProperties> = ({ flexDirection, p }) => (
  <Flex sx={{ flexDirection, p }}>
    <Box sx={{ flex: '1 1 auto', bg: 'background', m: 1 }}>
      Box 1
    </Box>
    <Box sx={{ m: 1, bg: 'muted' }}>
      Box 2
    </Box>
    <Box sx={{ m: 1, bg: 'secondary' }}>
      Box 3
    </Box>
  </Flex>
);

overview.controls = {
  flexDirection: { type: ControlTypes.OPTIONS, options: [ "column", "column-reverse", "row", "row-reverse"] },
  p: { type: ControlTypes.NUMBER, value: 0 },
};
