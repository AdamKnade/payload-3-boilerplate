import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating header`)

  try {
    revalidateTag('global_header', 'max')
  } catch (error) {
    // revalidateTag only works inside an active Next.js request (e.g. an
    // admin-panel edit). Writes made outside the running server -- a Local
    // API script, a migration, `payload run` -- hit this every time; that
    // must not roll back an otherwise-valid content update.
    payload.logger.warn(`Skipping header revalidation (no active Next.js request): ${error}`)
  }

  return doc
}
