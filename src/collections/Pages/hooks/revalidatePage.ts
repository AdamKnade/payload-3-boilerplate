import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Page } from '../../../payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  // revalidatePath only works inside an active Next.js request (e.g. an
  // admin-panel edit). Writes made outside the running server -- a Local API
  // script, a migration, `payload run` -- hit this every time; that must not
  // roll back an otherwise-valid content update.
  if (doc._status === 'published') {
    const path = doc.slug === 'home' ? '/' : `/${doc.slug}`

    payload.logger.info(`Revalidating page at path: ${path}`)

    try {
      revalidatePath(path)
    } catch (error) {
      payload.logger.warn(`Skipping revalidation of ${path} (no active Next.js request): ${error}`)
    }
  }

  // If the page was previously published, we need to revalidate the old path
  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`

    payload.logger.info(`Revalidating old page at path: ${oldPath}`)

    try {
      revalidatePath(oldPath)
    } catch (error) {
      payload.logger.warn(`Skipping revalidation of ${oldPath} (no active Next.js request): ${error}`)
    }
  }

  return doc
}
