import React from 'react';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { ThemeUICSSProperties } from '@theme-ui/css/src';
import { Flex, NavLink } from '../../../../components';


export default {
  title: 'components/NavLink',
  component: NavLink,
  category: 'Navigation',
} as Document;

export const overview: Example<ThemeUICSSProperties> = ({ p }) => (
  <Flex>
    <NavLink href='#!' sx={{ p }}>
      Home
    </NavLink>
    <NavLink href='#!' sx={{ p }}>
      Blog
    </NavLink>
    <NavLink href='#!' sx={{ p }}>
      About
    </NavLink>
  </Flex>
);

overview.controls = {
  p: { type: ControlTypes.NUMBER, value: 2 },
};
