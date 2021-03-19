import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Link } from '../../../components/src';

export default {
  title: 'components/Link',
  component: Link,
  category: 'Navigation'
} as Document;

export const overview: Example = () => <Link href='#!'>theme-ui link</Link>;
