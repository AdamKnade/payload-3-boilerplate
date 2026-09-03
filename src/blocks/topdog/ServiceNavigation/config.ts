import type { Block } from 'payload';
import { widthField, toneField } from '../_shared/fields';

// Only toggles the shared services strip — its per-service copy (descriptions,
// schedules, images) lives in the Astro repo's src/data/services.ts, not here.
// See payload-integration/README.md "Known gap" section before relying on this.
export const ServiceNavigation: Block = {
  slug: 'serviceNavigation',
  fields: [
    { name: 'behavior', type: 'select', defaultValue: 'switch', options: ['switch', 'navigate'] },
    { name: 'activeService', type: 'select', defaultValue: 'overnight', options: ['daycare', 'overnight', 'enrichment', 'spa'] },
    widthField,
    toneField('beige'),
  ],
};
