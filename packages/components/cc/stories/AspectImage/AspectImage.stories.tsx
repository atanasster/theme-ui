import React from 'react'
import { Document, Example, ControlTypes } from '@component-controls/core'
import { AspectImageProps } from '../../../index'
import { Box, AspectImage } from '../../../src'

export default {
  title: 'components/AspectImage',
  component: AspectImage,
  category: 'Media',
} as Document

export const overview: Example<AspectImageProps> = ({ src, ratio }) => (
  <Box sx={{ width: 100, height: 80 }}>
    <AspectImage ratio={ratio} src={src} alt="aspect image" />
  </Box>
)

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/id/133/128/128',
  },
  ratio: { type: ControlTypes.NUMBER, min: 0, max: 4, value: 4 / 3, step: 0.5 },
}
