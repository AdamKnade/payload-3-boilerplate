import type { Block } from 'payload';
import { widthField, toneField, blockIdField, ctaFields } from '../_shared/fields';

export const Columns: Block = {
  slug: 'columns',
  fields: [
    blockIdField,
    { name: 'display', type: 'select', defaultValue: 'plain', options: ['plain', 'separated', 'cards'] },
    { name: 'columnCount', type: 'select', defaultValue: '2', options: ['1', '2', '3', '4'] },
    { name: 'footerHtml', type: 'richText' },
    { name: 'divider', type: 'checkbox', defaultValue: false },
    widthField,
    toneField(),
    { name: 'padding', type: 'select', defaultValue: 'medium', options: ['none', 'small', 'medium', 'large'] },
    {
      name: 'columns', type: 'array', required: true, minRows: 1,
      fields: [
        { name: 'bodyHtml', type: 'richText', required: true },
        { name: 'ctas', type: 'array', fields: ctaFields },
        toneField(),
      ],
    },
  ],
};
