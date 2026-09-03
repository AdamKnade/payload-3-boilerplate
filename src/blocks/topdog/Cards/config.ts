import type { Block } from 'payload';
import { widthField, toneField, ctaFields } from '../_shared/fields';

export const Cards: Block = {
  slug: 'cards',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'introHtml', type: 'richText' },
    {
      name: 'variant', type: 'select', defaultValue: 'value',
      options: ['value', 'pricing', 'package', 'suite'].map((v) => ({ label: v, value: v })),
    },
    { name: 'columns', type: 'select', defaultValue: '3', options: ['1', '2', '3', '4'] },
    { name: 'align', type: 'select', defaultValue: 'left', options: ['left', 'center'] },
    widthField,
    toneField(),
    {
      name: 'cards', type: 'array', required: true, minRows: 1,
      fields: [
        toneField(),
        { name: 'icon', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'eyebrow', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text' },
        { name: 'value', type: 'text' },
        { name: 'bodyHtml', type: 'richText' },
        { name: 'cta', type: 'group', fields: ctaFields },
      ],
    },
  ],
};
