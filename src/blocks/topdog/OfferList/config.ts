import type { Block } from 'payload';
import { blockIdField, widthField, toneField, paddingTopField, paddingBottomField, optionalCtaFields } from '../_shared/fields';

export const OfferList: Block = {
  slug: 'offerList',
  fields: [
    blockIdField,
    { name: 'heading', type: 'text' },
    { name: 'introHtml', type: 'richText', label: 'Intro' },
    { name: 'variant', type: 'select', defaultValue: 'detailed', options: ['detailed', 'compact', 'menu'] },
    { name: 'columns', type: 'select', defaultValue: '1', options: ['1', '2'] },
    { name: 'cta', type: 'group', fields: optionalCtaFields },
    widthField,
    toneField(),
    paddingTopField,
    paddingBottomField,
    {
      name: 'offers', type: 'array', required: true, minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'bodyHtml', type: 'richText', label: 'Body' },
        { name: 'value', type: 'text' },
        { name: 'badge', type: 'text' },
        { name: 'icon', type: 'text' },
      ],
    },
  ],
};
