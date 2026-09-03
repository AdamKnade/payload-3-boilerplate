import type { Block } from 'payload';
import { widthField, toneField } from '../_shared/fields';

export const ImageBlock: Block = {
  slug: 'imageBlock',
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'alt', type: 'text', admin: { description: 'Falls back to the media item’s own alt text if left blank.' } },
    { name: 'aspectRatio', type: 'text', defaultValue: '16 / 9', admin: { description: 'CSS aspect-ratio value, e.g. "16 / 9".' } },
    { name: 'mobileAspectRatio', type: 'text' },
    { name: 'objectPosition', type: 'text', defaultValue: 'center' },
    { name: 'loading', type: 'select', defaultValue: 'lazy', options: ['eager', 'lazy'] },
    widthField,
    toneField(),
  ],
};
