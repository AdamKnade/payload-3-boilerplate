import type { Block } from 'payload';
import { widthField, toneField, ctaFields } from '../_shared/fields';

export const MediaContent: Block = {
  slug: 'mediaContent',
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'bodyHtml', type: 'richText', required: true },
    { name: 'mediaPosition', type: 'select', defaultValue: 'left', options: ['left', 'right'] },
    { name: 'ctas', type: 'array', fields: ctaFields },
    widthField,
    toneField(),
  ],
};
