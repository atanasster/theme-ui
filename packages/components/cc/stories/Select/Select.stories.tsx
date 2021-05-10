import React from 'react'
import { Document, Example } from '@component-controls/core'
import { Select } from '../../../src'

export default {
  title: 'components/Select',
  component: Select,
  category: 'Input',
} as Document

export const overview: Example = () => (
  <Select defaultValue="Hello">
    <option>Hello</option>
    <option>Hi</option>
    <option>Beep</option>
    <option>Boop</option>
  </Select>
)
