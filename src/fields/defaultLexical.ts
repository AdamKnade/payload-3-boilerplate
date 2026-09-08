import { Config } from 'payload'
import {
  BlockquoteFeature,
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

/**
 * The editor behind every richText field on the site — it is set as `editor`
 * on the root config and no block overrides it.
 *
 * ONLY ENABLE WHAT THE FRONTEND CAN RENDER. The Astro site serialises Lexical
 * to HTML in src/lib/richText.ts, whose `default` case renders a node's
 * children and drops the wrapper. A feature enabled here but unhandled there
 * does not error — it silently loses the formatting, after an editor has
 * already used it and moved on. The list below is exactly the set richText.ts
 * implements: text (bold/italic/underline/strikethrough/code), paragraph,
 * heading, quote, list, listitem, link, linebreak, horizontalrule.
 *
 * Deliberately absent because the serialiser cannot render them: Align,
 * Indent, Checklist, Table, Blocks, Relationship, Upload. Each needs a case in
 * richText.ts first.
 *
 * This previously enabled only Paragraph, Bold, Italic, Underline and Link,
 * with no toolbar features at all — which is why the admin showed a bare text
 * box with no controls, and why headings and lists could not be typed even
 * though the site uses both.
 */
export const defaultLexical: Config['editor'] = lexicalEditor({
  features: () => {
    return [
      ParagraphFeature(),
      // h1 belongs to the page title; the block components render h2 and h3.
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3'] }),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      StrikethroughFeature(),
      InlineCodeFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      // Without these the field renders as a plain text area: no button bar,
      // no selection popover, keyboard shortcuts only.
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      LinkFeature({
        enabledCollections: ['pages', 'posts'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false
            return true
          })

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: ({ linkType }) => linkType !== 'internal',
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true,
            },
          ]
        },
      }),
    ]
  },
})
