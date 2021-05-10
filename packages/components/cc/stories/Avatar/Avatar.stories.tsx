import React from 'react'
import { Document, Example, ControlTypes } from '@component-controls/core'
import { AvatarProps } from '../../../index'
import { Avatar } from '../../../src'
export default {
  title: 'components/Avatar',
  component: Avatar,
  description:
    'Avatar style variants can be defined in the `theme.images` object and uses `theme.images.avatar` by default.',
  category: 'Display',
} as Document

export const overview: Example<AvatarProps> = ({ src, size }) => (
  <Avatar src={src} size={size} />
)

overview.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://picsum.photos/id/1084/128/128',
  },
  size: { type: ControlTypes.NUMBER, value: 120, step: 10 },
}
