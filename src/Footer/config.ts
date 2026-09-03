import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 10,
    },
    {
      name: 'socialLinks',
      type: 'array',
      maxRows: 6,
      fields: [
        { name: 'label', type: 'text', required: true, admin: { description: 'e.g. "Instagram" — used as the link\'s aria-label.' } },
        { name: 'icon', type: 'text', required: true, admin: { description: 'A single glyph/character shown for this link, e.g. "◎".' } },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'businessInfo',
      type: 'group',
      admin: { description: 'The address/phone/hours line shown at the very bottom of the footer.' },
      fields: [
        { name: 'address', type: 'text', admin: { description: 'e.g. "625 N. Kingsbury, Chicago, IL 60654"' } },
        { name: 'phone', type: 'text', admin: { description: 'e.g. "312-285-2429"' } },
        { name: 'hoursWeekday', type: 'text', admin: { description: 'e.g. "Monday through Friday 7:00 AM – 7:00 PM"' } },
        { name: 'hoursWeekend', type: 'text', admin: { description: 'e.g. "Saturday & Sunday: 9:00 AM – 6:00 PM"' } },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
