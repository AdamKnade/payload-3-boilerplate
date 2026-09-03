import type { Block } from 'payload';
import { widthField, toneField, ctaFields } from '../_shared/fields';

export const Callout: Block = {
  slug: 'callout',
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text', required: true },
    { name: 'value', type: 'text' },
    { name: 'bodyHtml', type: 'richText' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'layout', type: 'select', defaultValue: 'centered', options: ['centered', 'split', 'compact'] },
    { name: 'ctas', type: 'array', fields: ctaFields },
    widthField,
    toneField('beige'),
  ],
};
