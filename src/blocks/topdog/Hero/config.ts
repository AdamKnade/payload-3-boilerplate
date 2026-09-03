import type { Block } from 'payload';
import { widthField, toneField } from '../_shared/fields';

// blockType slug MUST stay "hero" — matches the case in Astro's BlockRenderer.astro
export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'heading', type: 'textarea', required: true, admin: { description: 'Line breaks in this field become <br /> line breaks in the heading.' } },
    { name: 'ctaLabel', type: 'text', required: true },
    { name: 'ctaHref', type: 'text', required: true },
    widthField,
    toneField('dark'),
  ],
};
