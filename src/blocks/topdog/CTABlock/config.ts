import type { Block } from 'payload';
import { widthField, toneField, paddingTopField, paddingBottomField, ctaFields } from '../_shared/fields';

export const CTABlock: Block = {
  slug: 'ctaBlock',
  labels: { singular: 'CTA Block', plural: 'CTA Blocks' },
  fields: [
    { name: 'bodyHtml', type: 'richText', required: true },
    { name: 'ctas', type: 'array', required: true, minRows: 1, fields: ctaFields },
    { name: 'align', type: 'select', defaultValue: 'center', options: ['left', 'center'] },
    { name: 'textWidth', type: 'select', defaultValue: '1200', options: ['600', '800', '1000', '1200'] },
    widthField,
    toneField(),
    paddingTopField,
    paddingBottomField,
  ],
};
