import React, { useState } from 'react';
import { Document, Example } from '@component-controls/core';
import { Switch, SwitchProps } from '../../../../components';


export default {
  title: 'components/Switch',
  component: Switch,
  category: 'Input',
} as Document;

export const overview: Example<SwitchProps> = ({ label, checked: propChecked }) => {
  const [checked, setChecked] = useState(propChecked)
  return <Switch label={label} checked={checked} onChange={() => setChecked(!checked)} />
}

overview.controls = {
  label: 'Enable email alerts?',
  checked: true,
};
