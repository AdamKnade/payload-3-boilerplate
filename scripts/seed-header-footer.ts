// One-off script to populate the Header/Footer globals with the content
// currently hardcoded in the Astro site's src/components/Header.astro and
// Footer.astro. Run with: npx payload run scripts/seed-header-footer.ts
//
// Safe to re-run — it only overwrites these two globals (via updateGlobal,
// which replaces field values but never touches any other collection/global),
// unlike src/endpoints/seed/index.ts which wipes the entire database.
//
// Uses top-level await deliberately: `payload run` does `await import(script)`
// then immediately `process.exit(0)` — it only waits for the module's
// synchronous evaluation, not any promise left un-awaited inside it. Without
// top-level await here, the process gets killed mid-write.
import { getPayload } from 'payload'
import config from '@payload-config'

const custom = (label: string, url: string, newTab = false) => ({
  link: { type: 'custom' as const, label, url, newTab },
})

const payload = await getPayload({ config })

payload.logger.info('Seeding header...')
await payload.updateGlobal({
  slug: 'header',
  data: {
    navItems: [
      custom('Services', '#services'),
      custom('About', '#about'),
      custom('Our team', '#team'),
      custom('The space', '#space'),
      custom('FAQs', '#faqs'),
    ],
    ctaLabel: 'Membership',
    ctaHref: '#membership',
    loginHref: 'https://topdogchicago.portal.gingrapp.com',
  },
})

payload.logger.info('Seeding footer...')
await payload.updateGlobal({
  slug: 'footer',
  data: {
    navItems: [
      custom('About', '#about'),
      custom('Membership', '#membership'),
      custom('Services', '#services'),
      custom('Our team', '#team'),
      custom('FAQs', '#faqs'),
      custom('Careers', 'mailto:hello@topdog.example'),
      custom('Contact us', 'mailto:hello@topdog.example'),
    ],
    socialLinks: [
      { label: 'Instagram', icon: '◎', href: '#' },
      { label: 'Facebook', icon: '●', href: '#' },
      { label: 'Email', icon: '✉', href: 'mailto:hello@topdog.example' },
    ],
    businessInfo: {
      address: '625 N. Kingsbury, Chicago, IL 60654',
      phone: '312-285-2429',
      hoursWeekday: 'Monday through Friday 7:00 AM – 7:00 PM',
      hoursWeekend: 'Saturday & Sunday: 9:00 AM – 6:00 PM',
    },
  },
})

payload.logger.info('Done seeding header/footer.')
