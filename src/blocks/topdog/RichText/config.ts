import type { Block } from 'payload';
import { widthField, toneField, paddingTopField, paddingBottomField, blockIdField, ctaFields } from '../_shared/fields';

// Named `RichTextBlock` here to avoid colliding with Payload's own `richText`
// field type import — the block's slug is still "richText".
export const RichTextBlock: Block = {
  slug: 'richText',
  labels: { singular: 'Rich Text', plural: 'Rich Text Blocks' },
  fields: [
    blockIdField,
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'bodyHtml', type: 'richText', required: true },
    { name: 'align', type: 'select', defaultValue: 'left', options: ['left', 'center'] },
    { name: 'textWidth', type: 'select', defaultValue: '800', options: ['600', '800', '1000'] },
    widthField,
    toneField(),
    { name: 'cta', type: 'group', fields: ctaFields },
    paddingTopField,
    paddingBottomField,
    {
      name: 'floatingMedia', type: 'group',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
        { name: 'subCaption', type: 'text' },
        { name: 'position', type: 'select', defaultValue: 'right', options: ['left', 'right'] },
      ],
    },
  ],
};
