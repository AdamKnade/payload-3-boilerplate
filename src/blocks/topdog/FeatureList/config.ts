import type { Block } from 'payload';
import { widthField, toneField, blockIdField } from '../_shared/fields';

export const FeatureList: Block = {
  slug: 'featureList',
  fields: [
    blockIdField,
    { name: 'heading', type: 'text' },
    { name: 'introHtml', type: 'richText' },
    { name: 'columns', type: 'select', defaultValue: '2', options: ['1', '2'] },
    { name: 'numbered', type: 'checkbox', defaultValue: false },
    widthField,
    toneField(),
    {
      name: 'items', type: 'array', required: true, minRows: 1,
      fields: [
        { name: 'icon', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'bodyHtml', type: 'richText', required: true },
      ],
    },
  ],
};
