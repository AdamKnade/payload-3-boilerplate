import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Post } from '../../../payload-types'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  // See the matching comment in src/collections/Pages/hooks/revalidatePage.ts
  // -- revalidatePath throws outside an active Next.js request, which must
  // not roll back an otherwise-valid content update (e.g. from a seed script).
  if (doc._status === 'published') {
    const path = `/posts/${doc.slug}`

    payload.logger.info(`Revalidating post at path: ${path}`)

    try {
      revalidatePath(path)
      revalidatePath('/posts')
    } catch (error) {
      payload.logger.warn(`Skipping revalidation of ${path} (no active Next.js request): ${error}`)
    }
  }

  // If the post was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/posts/${previousDoc.slug}`

    payload.logger.info(`Revalidating old post at path: ${oldPath}`)

    try {
      revalidatePath(oldPath)
      revalidatePath('/posts')
    } catch (error) {
      payload.logger.warn(`Skipping revalidation of ${oldPath} (no active Next.js request): ${error}`)
    }
  }

  return doc
}
