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

export const ctaFields: Field[] = [
  { name: 'label', type: 'text', required: true },
  { name: 'href', type: 'text', required: true },
];
