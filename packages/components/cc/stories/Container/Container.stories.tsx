import React from 'react'
import { Document, Example, ControlTypes } from '@component-controls/core'
import { ThemeUICSSProperties } from '@theme-ui/css/src'
import { Container } from '../../../src'

export default {
  title: 'components/Container',
  component: Container,
  category: 'Containers',
} as Document

export const overview: Example<ThemeUICSSProperties> = ({ bg, p }) => (
  <Container sx={{ bg, p }}>Container text</Container>
)

const colors = [
  'text',
  'background',
  'primary',
  'secondary',
  'highlight',
  'muted',
  'gray',
]
overview.controls = {
  p: { type: ControlTypes.NUMBER, value: 4 },
  bg: { type: ControlTypes.OPTIONS, value: 'muted', options: colors },
}
