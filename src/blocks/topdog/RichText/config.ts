import type { Block } from 'payload';
import { widthField, toneField, paddingTopField, paddingBottomField, blockIdField, optionalCtaFields } from '../_shared/fields';

// Named `RichTextBlock` here to avoid colliding with Payload's own `richText`
// field type import — the block's slug is still "richText".
export const RichTextBlock: Block = {
  slug: 'richText',
  labels: { singular: 'Rich Text', plural: 'Rich Text Blocks' },
  fields: [
    blockIdField,
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'bodyHtml', type: 'richText', required: true, label: 'Body' },
    // Renders the body as a tight schedule grid rather than prose. A field
    // because the markup it replaced carried a class (.schedule-lines) and
    // Lexical cannot hold one -- see MIGRATION.md.
    { name: 'bodyVariant', type: 'select', defaultValue: '',
      options: [{ label: 'Prose', value: '' }, { label: 'Schedule list', value: 'schedule' }] },
    { name: 'align', type: 'select', defaultValue: 'left', options: ['left', 'center'] },
    { name: 'textWidth', type: 'select', defaultValue: '800', options: ['600', '800', '1000'] },
    widthField,
    toneField(),
    { name: 'cta', type: 'group', fields: optionalCtaFields },
    paddingTopField,
    paddingBottomField,
    {
      name: 'floatingMedia', type: 'group',
      label: 'Floating image (optional)',
      admin: { description: 'Leave the image empty for no floating image.' },
      fields: [
        // Not required. A group is always present in Payload, so a required
        // field inside one cannot be opted out of -- and an empty image here
        // used to render a broken <img> floated into the text.
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'caption', type: 'text' },
        { name: 'subCaption', type: 'text' },
        { name: 'position', type: 'select', defaultValue: 'right', options: ['left', 'right'] },
      ],
    },
  ],
};
