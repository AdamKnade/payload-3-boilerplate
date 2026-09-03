import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateFooter: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating footer`)

  try {
    revalidateTag('global_footer', 'max')
  } catch (error) {
    // See the matching comment in src/Header/hooks/revalidateHeader.ts.
    payload.logger.warn(`Skipping footer revalidation (no active Next.js request): ${error}`)
  }

  return doc
}
