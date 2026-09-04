import type { Block } from 'payload';
import { widthField, toneField } from '../_shared/fields';

// For third-party JS widgets (e.g. Gingr's Lead Form / Photostream embeds)
// that ship as a <script src="..."> plus a target snippet. Deliberately
// generic, not Gingr-specific — reusable for any similar embed later.
//
// Split into two fields rather than one raw HTML paste because Astro's
// set:html (innerHTML) never executes <script> tags it's given — the script
// has to be a real <script> element in the page for the browser to run it.
export const EmbedCode: Block = {
  slug: 'embedCode',
  labels: { singular: 'Embed', plural: 'Embeds' },
  fields: [
    { name: 'label', type: 'text', admin: { description: 'Admin-only note to identify this embed in the block list, e.g. "Gingr Lead Form".' } },
    { name: 'scriptSrc', type: 'text', admin: { description: 'External script URL, if the embed needs one (e.g. Gingr\'s bundle.js). Leave blank if not needed.' } },
    {
      name: 'embedHtml',
      type: 'code',
      admin: { language: 'html', description: 'The target markup Gingr (or another provider) gives you for where the widget should render.' },
    },
    widthField,
    toneField(),
  ],
};
