# Dermatix Website Map

Last reviewed: 2026-04-29

## Route Tree

```text
/
+-- /services
|   +-- /services/botox
|   +-- /services/dermal-filler
|   +-- /services/prp
|   +-- /services/dermal-peel
|   +-- /services/laser-hair-removal
|   +-- /services/cryolipolysis
|   +-- /services/hifu-skin-tightening
|   +-- /services/hifu-vaginal-tightening
|   +-- /services/hydrafacial
|   +-- /services/dermabrasion
+-- /consultation
+-- /results
+-- /contact
+-- /book
+-- /book/consultation
```

## App Shell

| File | Purpose | Notes |
| --- | --- | --- |
| `app/layout.jsx` | Root HTML shell, global font setup, global metadata, viewport theme color. | Does not render `Nav` or `Footer`; each page imports those manually. |
| `app/globals.css` | Global Tailwind styles and site-wide helpers. | Includes `.display`, `.display-italic`, `.eyebrow`, `.reveal`, `.grain`, `.vignette`, `.editorial-link`, `.curtain`, `.arrow-slide`. |
| `lib/services.js` | Service data source. | Drives service cards, service nav dropdown, booking select, and service detail pages. |
| `app/actions.js` | Server actions for booking and inquiry forms. | Used by `BookingForm`, `ConsultationForm`, and `InquiryForm`. |

## Pages By Route

### `/`

File: `app/page.jsx`

Page sections, in order:

```text
Nav
Hero
Marquee
Philosophy
Services
Signature
Experience
Editorial
Testimonials
Location
CTA
Footer
```

Main purpose: one-page editorial landing/homepage.

Primary CTAs:

| CTA | Destination |
| --- | --- |
| Book consultation | `/book/consultation` |
| View services | `/services` |
| Book consult in services block | `/consultation` |
| Call CTA | `tel:19056058444` |

Review notes:

- Several homepage sections contain brand-positioning or credibility claims that should be checked with the client before final launch.
- `Location` has an anchor link to `#book`, but there is no visible element with `id="book"` on the homepage.

### `/services`

File: `app/services/page.jsx`

Components/imports:

```text
Nav
PageHeader
Reveal
Footer
next/image
next/link
services data
```

Main purpose: full service menu grid.

Data source:

- `services` from `lib/services.js`

Outgoing links:

| Link | Destination |
| --- | --- |
| Each service card | `/services/{service.slug}` |
| Book consultation CTA | `/book/consultation` |

### `/services/[slug]`

File: `app/services/[slug]/page.jsx`

Static paths generated from:

- `getServiceSlugs()` in `lib/services.js`

Valid service detail routes:

| Route | Service |
| --- | --- |
| `/services/botox` | Botox |
| `/services/dermal-filler` | Dermal Filler |
| `/services/prp` | PRP Treatment |
| `/services/dermal-peel` | Dermal Peel |
| `/services/laser-hair-removal` | Laser Hair Removal |
| `/services/cryolipolysis` | Cryolipolysis |
| `/services/hifu-skin-tightening` | HIFU Skin Tightening |
| `/services/hifu-vaginal-tightening` | HIFU Vaginal Tightening |
| `/services/hydrafacial` | Hydrafacial |
| `/services/dermabrasion` | Dermabrasion |

Components/imports:

```text
Nav
Reveal
Footer
next/image
next/link
notFound
services data
getServiceBySlug
getServiceSlugs
```

Page sections, in order:

```text
Nav
Hero/service intro
Quick facts strip
Long-form educational read
Fit check: common conversations + boundaries
Protocol/process cards
FAQ
Booking CTA
Related services
Footer
```

Outgoing links:

| Link | Destination |
| --- | --- |
| Back to services breadcrumb | `/services` |
| Book this treatment | `/book?service={service.slug}` |
| Book consultation | `/book/consultation` |
| Related service cards | `/services/{related.slug}` |
| All services | `/services` |

### `/consultation`

File: `app/consultation/page.jsx`

Components/imports:

```text
Nav
Reveal
Footer
next/image
next/link
```

Main purpose: informational consultation landing page.

Page sections:

```text
Nav
Hero
What to expect
Good to know
Book consultation CTA
Footer
```

Outgoing links:

| Link | Destination |
| --- | --- |
| Book consultation | `/book/consultation` |
| View services | `/services` |

Review notes:

- Mentions "physician-led", photo documentation, controlled light, staged plans, cost ranges, and 24-hour cancellation policy. Confirm all with client.
- Metadata says "30-minute, physician-led conversation"; confirm wording.

### `/results`

File: `app/results/page.jsx`

Components/imports:

```text
Nav
PageHeader
Reveal
BeforeAfter
Footer
next/image
next/link
```

Main purpose: results, reviews, and gallery page.

Page sections:

```text
Nav
PageHeader
Stats strip
Quotes
Before/after slider
Selected work gallery
CTA
Footer
```

Outgoing links:

| Link | Destination |
| --- | --- |
| Start your protocol | `/book/consultation` |
| Book consultation | `/book/consultation` |
| View services | `/services` |

Review notes:

- High-priority review page. It includes numbers, testimonials, patient initials, results claims, and before/after language.
- Current stats include "12k+ Treatments delivered", "847 Verified 5-star reviews", "98% Would refer a friend", and "Serving Woodbridge since 2020". Confirm or replace.
- Before/after currently uses the same image for before and after.
- Claims such as "all photographs are clinical, unretouched and patient-released" should be confirmed before launch.

### `/contact`

File: `app/contact/page.jsx`

Components/imports:

```text
Nav
InquiryForm
Footer
next/link
```

Main purpose: contact information, inquiry form, embedded Google map.

Page sections:

```text
Nav
Contact hero + clinic details + InquiryForm
Google map iframe
Footer
```

Outgoing links:

| Link | Destination |
| --- | --- |
| Book instead | `/book` |
| Book consultation | `/book/consultation` |
| Phone | `tel:19056058444` |
| Email | `mailto:clinic@dermatixclinic.com` |
| Google map iframe | Embedded map query for 10 Ansley Grove Rd |

Review notes:

- Says inquiries are answered within one business day. Confirm client wants this promise.
- Hours appear here and in `Footer`/`Location`; ensure they are final.

### `/book`

File: `app/book/page.jsx`

Components/imports:

```text
Nav
BookingForm
Footer
next/link
getServiceBySlug
```

Main purpose: service appointment booking form.

Behavior:

- Reads optional `service` query param.
- If `?service={slug}` is valid, preselects that service.
- Shows a selected service summary and link back to the service detail page.

Example service-linked booking URLs:

```text
/book?service=botox
/book?service=dermal-filler
/book?service=hydrafacial
```

Outgoing links:

| Link | Destination |
| --- | --- |
| Read about selected treatment | `/services/{service.slug}` |
| Book new patient consultation instead | `/book/consultation` |
| Phone | `tel:19056058444` |
| Email | `mailto:clinic@dermatixclinic.com` |

Review notes:

- Copy says "confirmed 30-minute booking" and "No charge until your visit." Confirm these operational details.

### `/book/consultation`

File: `app/book/consultation/page.jsx`

Components/imports:

```text
Nav
ConsultationForm
Footer
next/link
```

Main purpose: dedicated consultation booking form.

Outgoing links:

| Link | Destination |
| --- | --- |
| Book service appointment instead | `/book` |
| Phone | `tel:19056058444` |
| Email | `mailto:clinic@dermatixclinic.com` |

Review notes:

- Repeats "30-minute", "physician-led", "photo-documented skin assessment", and "No treatment on the day." Confirm with client.

## Component Reuse Index

### Global/Page-Level Components

| Component | File | Used On |
| --- | --- | --- |
| `Nav` | `components/Nav.jsx` | `/`, `/services`, `/services/[slug]`, `/consultation`, `/results`, `/contact`, `/book`, `/book/consultation` |
| `Footer` | `components/Footer.jsx` | `/`, `/services`, `/services/[slug]`, `/consultation`, `/results`, `/contact`, `/book`, `/book/consultation` |
| `PageHeader` | `components/PageHeader.jsx` | `/services`, `/results` |
| `Reveal` | `components/Reveal.jsx` | Home sections, `/services`, `/services/[slug]`, `/consultation`, `/results` |

### Homepage-Only Components

| Component | File | Used On | Similar/Related Components |
| --- | --- | --- | --- |
| `Hero` | `components/Hero.jsx` | `/` | Similar hero layouts are hand-coded in `/consultation`, `/contact`, `/book`, `/book/consultation`, and `/services/[slug]`. |
| `Marquee` | `components/Marquee.jsx` | `/` | Uses `Reveal`; no route-level equivalent. |
| `Philosophy` | `components/Philosophy.jsx` | `/` | Similar editorial positioning appears in `Editorial`, `Experience`, and `Signature`. |
| `Services` | `components/Services.jsx` | `/` | Similar service grids appear in `/services` and related-services section in `/services/[slug]`. |
| `Signature` | `components/Signature.jsx` | `/` | Related to services content, but uses its own local feature data. |
| `Experience` | `components/Experience.jsx` | `/` | Similar protocol/card rhythm appears in `/consultation` and `/services/[slug]`. |
| `Editorial` | `components/Editorial.jsx` | `/` | Editorial brand block. |
| `Testimonials` | `components/Testimonials.jsx` | `/` | Similar testimonials appear in `/results`, but `/results` uses local quote data instead of this component. |
| `Location` | `components/Location.jsx` | `/` | Similar contact/map content appears on `/contact`, but is coded separately. |
| `CTA` | `components/CTA.jsx` | `/` | Similar CTA bands are hand-coded in `/consultation`, `/results`, and `/services/[slug]`. |

### Form Components

| Component | File | Used On | Depends On |
| --- | --- | --- | --- |
| `BookingForm` | `components/BookingForm.jsx` | `/book` | `submitBooking` server action, `services` data |
| `ConsultationForm` | `components/ConsultationForm.jsx` | `/book/consultation` | `submitBooking` server action |
| `InquiryForm` | `components/InquiryForm.jsx` | `/contact` | `submitInquiry` server action |

### Utility/Interactive Components

| Component | File | Used On | Notes |
| --- | --- | --- | --- |
| `BeforeAfter` | `components/BeforeAfter.jsx` | `/results` | Client component with draggable before/after slider. |
| `Reveal` | `components/Reveal.jsx` | Many pages/components | Client component using `IntersectionObserver`. |
| `Nav` | `components/Nav.jsx` | All main pages | Client component using `usePathname`, scroll state, and service dropdown state. |

## Data Dependencies

### `lib/services.js`

Used by:

| Consumer | Purpose |
| --- | --- |
| `components/Nav.jsx` | Services dropdown list. |
| `components/Services.jsx` | Homepage service cards. |
| `app/services/page.jsx` | Services index grid. |
| `app/services/[slug]/page.jsx` | Service details, static params, metadata, related services. |
| `components/BookingForm.jsx` | Service select dropdown. |
| `app/book/page.jsx` | Validates/preloads `?service=` query param. |
| `app/actions.js` | Formats selected service in booking emails. |

Service object fields currently used:

```text
no
slug
name
blurb
summary
time
modality
img
tags
facts
story
goodFor
boundaries
process
faqs
```

## Server Actions / Forms

| Action | File | Called By | Purpose |
| --- | --- | --- | --- |
| `submitBooking` | `app/actions.js` | `BookingForm`, `ConsultationForm` | Sends/records appointment and consultation bookings. |
| `submitInquiry` | `app/actions.js` | `InquiryForm` | Sends/records contact inquiries. |

Environment/config noted in `README.md`:

```text
RESEND_API_KEY
DERMATIX_STAFF_EMAILS
RESEND_FROM_EMAIL
```

## Main Navigation

Component: `components/Nav.jsx`

Desktop nav links:

```text
Dermatix logo -> /
Services -> /services
Services dropdown -> /services/{slug}
Dropdown CTA -> /book/consultation
Consultation -> /consultation
Results -> /results
Contact -> /contact
Book -> /book
```

Notes:

- There is no mobile menu beyond the visible Book button and logo/nav behavior. On small screens, the desktop link group is hidden.
- Services dropdown uses all entries from `lib/services.js`.

## Footer Navigation

Component: `components/Footer.jsx`

Footer menu links:

```text
/services
/consultation
/results
/contact
/book
```

Other footer links:

```text
tel:19056058444
mailto:clinic@dermatixclinic.com
#
#
#
```

Review notes:

- Privacy, Terms, and Instagram currently use `href="#"`.
- Footer claims "Physician-led, European-trained, obsessively subtle. Serving the GTA since 2020." Confirm with client.

## Similar Patterns / Possible Refactor Candidates

These areas repeat similar layouts but are currently coded separately:

| Pattern | Locations |
| --- | --- |
| Large hero with eyebrow/title/lede/buttons/image | `Hero`, `/consultation`, `/services/[slug]`, `/book`, `/book/consultation`, `/contact` |
| Dark CTA band | `CTA`, `/consultation`, `/results`, `/services/[slug]` |
| Protocol/cards grid | `Experience`, `/consultation`, `/services/[slug]` |
| Service cards | `components/Services.jsx`, `/services/page.jsx`, related services in `/services/[slug]` |
| Contact/map block | `components/Location.jsx`, `/contact/page.jsx` |
| Testimonials/quotes | `components/Testimonials.jsx`, `/results/page.jsx` |

## Client Review Flags

Use this checklist in the meeting before final launch:

| Area | Why to Review |
| --- | --- |
| Results page stats | Numbers like reviews, referral rate, treatment count, and before/after claims need proof or replacement. |
| Testimonials | Confirm every quote, initials, treatment label, and consent. |
| Physician-led claims | Appears on consultation/book/footer/results/home areas; confirm provider wording. |
| European-trained claim | Appears in footer; confirm or remove. |
| Established/serving since 2020 | Appears in footer and other components; confirm date. |
| Hours | Appears in footer, contact, and homepage location section; confirm final clinic hours. |
| Booking promises | "Confirmed 30-minute", "no charge until visit", "no treatment on consultation day", and cancellation policy need confirmation. |
| Inquiry response time | Contact page and form promise one-business-day response. |
| Privacy/Terms/Instagram | Footer links are placeholders. |
| Mobile nav | Desktop nav links are hidden on mobile; confirm if a mobile menu is required. |
| Homepage `#book` link | `Location` links to `#book`, but no matching anchor exists. |
| Service detail copy | New service copy is educational/cautious, but client should still approve wording and any treatment claims. |
