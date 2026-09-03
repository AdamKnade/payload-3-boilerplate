import type { Block } from 'payload';
import { widthField, toneField, ctaFields } from '../_shared/fields';

export const DataTable: Block = {
  slug: 'dataTable',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'introHtml', type: 'richText' },
    { name: 'variant', type: 'select', defaultValue: 'standard', options: ['standard', 'pricing', 'compact'] },
    { name: 'align', type: 'select', defaultValue: 'left', options: ['left', 'center'] },
    { name: 'highlightedRow', type: 'number', admin: { description: 'Zero-based row index to visually highlight (optional).' } },
    { name: 'footnotesHtml', type: 'richText' },
    { name: 'cta', type: 'group', fields: ctaFields },
    widthField,
    toneField(),
    { name: 'headers', type: 'array', required: true, minRows: 1, fields: [{ name: 'value', type: 'richText', required: true }] },
    {
      name: 'rows', type: 'array', required: true, minRows: 1,
      fields: [{ name: 'cells', type: 'array', required: true, minRows: 1, fields: [{ name: 'value', type: 'richText', required: true }] }],
    },
  ],
};
