import type { Block } from 'payload';
import { widthField, toneField, blockIdField, paddingTopField, paddingBottomField } from '../_shared/fields';

export const FeatureList: Block = {
  slug: 'featureList',
  fields: [
    blockIdField,
    { name: 'heading', type: 'text' },
    { name: 'introHtml', type: 'richText', label: 'Intro' },
    { name: 'columns', type: 'select', defaultValue: '2', options: ['1', '2'] },
    { name: 'align', type: 'select', defaultValue: 'left', options: ['left', 'center'] },
    // 'meta' renders each label small, bold and letterspaced instead of as a
    // display-font subheading -- for term/definition content rather than features.
    { name: 'labelStyle', type: 'select', defaultValue: 'heading', options: ['heading', 'meta'] },
    { name: 'numbered', type: 'checkbox', defaultValue: false },
    widthField,
    toneField(),
    paddingTopField,
    paddingBottomField,
    {
      name: 'items', type: 'array', required: true, minRows: 1,
      fields: [
        { name: 'icon', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'bodyHtml', type: 'richText', required: true, label: 'Body' },
      ],
    },
  ],
};
