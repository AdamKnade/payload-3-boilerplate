import type { Block } from 'payload';
import { widthField, toneField, blockIdField, paddingTopField, paddingBottomField } from '../_shared/fields';

export const FAQBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    blockIdField,
    { name: 'heading', type: 'text', defaultValue: 'FAQs' },
    { name: 'introHtml', type: 'richText' },
    widthField,
    toneField(),
    paddingTopField,
    paddingBottomField,
    {
      name: 'items', type: 'array', required: true, minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answerHtml', type: 'richText', required: true },
      ],
    },
  ],
};
