import React from 'react'
import { Document, Example, ControlTypes } from '@component-controls/core'
import { InputProps } from '../../../index'
import { Input } from '../../../src'

export default {
  title: 'components/Input',
  component: Input,
  category: 'Input',
} as Document

export const overview: Example<InputProps> = ({ defaultValue }) => (
  <Input defaultValue={defaultValue} />
)

overview.controls = {
  defaultValue: { type: ControlTypes.TEXT, value: 'Katlyn Oberbrunner' },
}
