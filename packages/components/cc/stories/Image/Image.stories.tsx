import React from 'react'
import { Document, Example, ControlTypes } from '@component-controls/core'
import { ImageProps } from '../../../index'
import { Image } from '../../../src'

export default {
  title: 'components/Image',
  component: Image,
  category: 'Media',
} as Document

export const overview: Example<ImageProps> = ({ src }) => <Image src={src} />

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/200/300',
  },
}
