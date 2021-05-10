import React, { useState } from 'react'
import { Document, Example } from '@component-controls/core'
import { SwitchProps } from '../../../index'
import { Switch } from '../../../src'

export default {
  title: 'components/Switch',
  component: Switch,
  category: 'Input',
} as Document

export const overview: Example<SwitchProps> = ({
  label,
  checked: propChecked,
}) => {
  const [checked, setChecked] = useState(propChecked)
  return (
    <Switch
      label={label}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}

overview.controls = {
  label: 'Enable email alerts?',
  checked: true,
}
