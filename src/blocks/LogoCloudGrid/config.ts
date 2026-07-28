import type { Block } from 'payload'

import { logoCloudFields } from '@/blocks/shared/logoCloudFields'

export const LogoCloudGrid: Block = {
  slug: 'logoCloudGrid',
  dbName: 'pc_log_clo_gri',
  interfaceName: 'LogoCloudGridBlock',
  fields: [...logoCloudFields],
  labels: {
    plural: 'Logo Cloud Grid Blocks',
    singular: 'Logo Cloud Grid',
  },
}
