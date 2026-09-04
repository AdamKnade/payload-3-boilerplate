import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
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
      maxRows: 6,
    },
    {
      name: 'ctaLabel',
      type: 'text',
      defaultValue: 'Membership',
    },
    {
      name: 'ctaHref',
      type: 'text',
      defaultValue: '#membership',
    },
    {
      name: 'loginHref',
      type: 'text',
      admin: { description: 'The small round "Member login" icon — link to the Gingr customer portal login.' },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
