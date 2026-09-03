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
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
