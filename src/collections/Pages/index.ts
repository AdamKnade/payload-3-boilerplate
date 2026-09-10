import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { LogoCloudGrid } from '../../blocks/LogoCloudGrid/config'
import { topDogBlocks } from '../../blocks/topdog'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

/**
 * Where the Astro site is serving its /preview route.
 *
 * Payload renders the live-preview panel in an <iframe> in the editor's own
 * browser, so http://localhost:4321 genuinely works -- it resolves against
 * their machine, not this container. The cost is that each editor has to be
 * running `astro dev`. Set ASTRO_PREVIEW_URL on the service to point at a
 * deployed instance instead. No trailing slash.
 */
const astroPreviewURL = () => process.env.ASTRO_PREVIEW_URL || 'http://localhost:4321'

/**
 * Preview addresses a page by id, not slug.
 *
 * A page has an id from its first autosave; `slug` is derived from `title` and
 * stays null until the editor types one. Keying on the slug meant a page with
 * content but no title produced `/preview/`, which the Astro site serves as its
 * page-list index -- so the panel showed a list instead of the page.
 */
const previewKey = (data: unknown) => {
  const d = data as { id?: unknown; slug?: unknown } | undefined
  if (d?.id !== undefined && d?.id !== null) return encodeURIComponent(String(d.id))
  return encodeURIComponent(typeof d?.slug === 'string' ? d.slug : '')
}

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pagess'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    // Preview points at the Astro site, not this app's bundled Next.js
    // frontend: that renders a different design and knows nothing about the
    // topdog blocks, so its preview never resembled the real site.
    //
    // The slug is a path segment, not a query parameter. Astro strips the
    // query string from prerendered routes, and the Astro site builds with
    // output: 'static', so `/preview?slug=x` always rendered its empty state.
    livePreview: {
      url: ({ data }) => `${astroPreviewURL()}/preview/${previewKey(data)}`,
    },
    preview: (data) => `${astroPreviewURL()}/preview/${previewKey(data)}`,
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [...topDogBlocks, CallToAction, Content, MediaBlock, Archive, FormBlock, LogoCloudGrid],
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'bodyClass',
      type: 'text',
      admin: {
        position: 'sidebar',
        description:
          'Optional class applied to <body>. Only needed for pages whose design ' +
          'depends on it -- currently "about-page". Leave empty otherwise.',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
