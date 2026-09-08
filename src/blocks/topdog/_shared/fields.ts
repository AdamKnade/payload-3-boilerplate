// Shared field snippets reused across every block below (imported as
// `../_shared/fields` from each block's config.ts, matching this repo's
// per-block-folder convention), so the "appearance" controls (width/tone/
// padding) stay consistent with the option sets each Astro component's Props
// actually accept — see the `width`/`tone`/`padding` unions in
// src/components/ContentBlock.astro in the Astro repo.
import type { Field } from 'payload';

export const widthField: Field = {
  name: 'width',
  type: 'select',
  defaultValue: 'full',
  options: [
    { label: 'Full width', value: 'full' },
    { label: '1000px', value: '1000' },
    { label: '1200px', value: '1200' },
    { label: '1400px', value: '1400' },
  ],
};

export const toneField = (defaultValue: string = 'white'): Field => ({
  name: 'tone',
  type: 'select',
  defaultValue,
  options: [
    { label: 'White', value: 'white' },
    { label: 'Beige', value: 'beige' },
    { label: 'Sage', value: 'sage' },
    { label: 'Green', value: 'green' },
    { label: 'Dark', value: 'dark' },
  ],
});

const paddingOptions = [
  { label: 'None', value: 'none' },
  { label: 'Compact', value: 'compact' },
  { label: 'Standard', value: 'standard' },
  { label: 'Roomy', value: 'roomy' },
];

export const paddingTopField: Field = { name: 'paddingTop', type: 'select', defaultValue: 'standard', options: paddingOptions };
export const paddingBottomField: Field = { name: 'paddingBottom', type: 'select', defaultValue: 'standard', options: paddingOptions };

/** Optional HTML id for the block's <section>, for on-page anchor links (e.g. "#membership"). */
export const blockIdField: Field = { name: 'blockId', type: 'text', label: 'Anchor ID (optional)', admin: { description: 'Sets the section’s HTML id, for links like #membership.' } };

/**
 * For a CTA inside an `array`, where a row only exists because someone added
 * it — so a row without a label or a link is a mistake worth blocking.
 */
export const ctaFields: Field[] = [
  { name: 'label', type: 'text', required: true },
  { name: 'href', type: 'text', required: true },
  // Every Gingr booking link on the site opens in a new tab. Without this
  // field a CMS-authored CTA can only ever open in the same tab.
  { name: 'newTab', type: 'checkbox', label: 'Open in a new tab',
    admin: { description: 'Use for links that leave the site, e.g. the Gingr portal.' } },
];

/**
 * For a CTA inside a `group`. A Payload group is always present — there is no
 * "remove" gesture for one — so a required field inside it can never be opted
 * out of, and the block could never be saved without a CTA. Leaving the label
 * and link empty is how you say "no button here".
 *
 * BlockRenderer drops any CTA missing either half, so an abandoned one cannot
 * reach the page as an empty <a>.
 */
export const optionalCtaFields: Field[] = ctaFields.map((field) =>
  'name' in field && (field.name === 'label' || field.name === 'href')
    ? { ...field, required: false }
    : field,
);
