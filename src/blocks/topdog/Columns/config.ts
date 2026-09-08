import type { Block } from 'payload';
import { widthField, toneField, blockIdField, ctaFields, paddingTopField, paddingBottomField } from '../_shared/fields';

export const Columns: Block = {
  slug: 'columns',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'introHtml', type: 'richText' },
    blockIdField,
    { name: 'display', type: 'select', defaultValue: 'plain', options: ['plain', 'separated', 'cards'] },
    { name: 'columnCount', type: 'select', defaultValue: '2', options: ['1', '2', '3', '4'] },
    { name: 'footerHtml', type: 'richText' },
    { name: 'divider', type: 'checkbox', defaultValue: false },
    widthField,
    toneField(),
    paddingTopField,
    paddingBottomField,
    // DEPRECATED, and deliberately still here. Its options (small/medium/large)
    // are not the component's vocabulary (none/compact/standard/roomy), so any
    // choice produces a class name with no CSS behind it, and BlockRenderer
    // never forwarded it. paddingTop/paddingBottom above cover the same ground.
    //
    // Not removed yet because dropping it in the same migration that adds the
    // padding enums makes its enum a rename candidate for the new ones, and
    // `payload migrate:create` then stops to ask — a question you do not want
    // to answer by accident against a production database. Remove it in its own
    // migration once these fields have landed.
    { name: 'padding', type: 'select', defaultValue: 'medium', options: ['none', 'small', 'medium', 'large'] },
    {
      name: 'columns', type: 'array', required: true, minRows: 1,
      fields: [
        // heading/value/note are separate fields rather than markup inside
        // bodyHtml because they carry classes (columns__value, columns__note)
        // and Lexical cannot express a class. See MIGRATION.md.
        { name: 'heading', type: 'text' },
        { name: 'value', type: 'text', label: 'Price / value',
          admin: { description: 'Shown large beside the heading, e.g. "$40". Needs a heading.' } },
        { name: 'bodyHtml', type: 'richText' },
        { name: 'noteHtml', type: 'richText', label: 'Small print',
          admin: { description: 'Italic note below the body.' } },
        // The enrichment page's spa / room-service panels. Previously <table>
        // markup assembled inside bodyHtml, which an editor could not author.
        {
          name: 'table', type: 'group', label: 'Pricing table (optional)',
          admin: { description: 'Leave the rows empty if this column has no table.' },
          fields: [
            { name: 'headers', type: 'array', fields: [{ name: 'value', type: 'text', required: true }] },
            {
              name: 'rows', type: 'array',
              fields: [{ name: 'cells', type: 'array', fields: [{ name: 'value', type: 'text', required: true }] }],
            },
            { name: 'footnoteHtml', type: 'richText', label: 'Footnote' },
            { name: 'cta', type: 'group', fields: ctaFields },
          ],
        },
        { name: 'ctas', type: 'array', fields: ctaFields },
        toneField(),
      ],
    },
  ],
};
