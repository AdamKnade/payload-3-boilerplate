import type { Block } from 'payload';
import { blockIdField, widthField, toneField, ctaFields, paddingTopField, paddingBottomField } from '../_shared/fields';

export const OfferList: Block = {
  slug: 'offerList',
  fields: [
    blockIdField,
    { name: 'heading', type: 'text' },
    { name: 'introHtml', type: 'richText' },
    { name: 'variant', type: 'select', defaultValue: 'detailed', options: ['detailed', 'compact', 'menu'] },
    { name: 'columns', type: 'select', defaultValue: '1', options: ['1', '2'] },
    { name: 'cta', type: 'group', fields: ctaFields },
    widthField,
    toneField(),
    paddingTopField,
    paddingBottomField,
    {
      name: 'offers', type: 'array', required: true, minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'bodyHtml', type: 'richText' },
        { name: 'value', type: 'text' },
        { name: 'badge', type: 'text' },
        { name: 'icon', type: 'text' },
      ],
    },
  ],
};
