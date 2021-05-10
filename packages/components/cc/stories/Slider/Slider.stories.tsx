import React from 'react'
import { Document, Example, ControlTypes } from '@component-controls/core'
import { SliderProps } from '../../../index'
import { Slider } from '../../../src'

export default {
  title: 'components/Slider',
  component: Slider,
  category: 'Input',
} as Document

export const overview: Example<SliderProps> = ({ defaultValue }) => (
  <Slider defaultValue={defaultValue} />
)

overview.controls = {
  defaultValue: { type: ControlTypes.NUMBER, value: 25, min: 0, max: 100 },
}
