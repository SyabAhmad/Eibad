# Off-site action sheet

On-site work only matters if crawlers can connect this domain to your professional
identity. Everything below is something only you can do, in priority order.

Status: `TODO` items need your input. `DONE` means it is implemented on the site
and just needs your account details.

---

## 1. LinkedIn — do this first

**Why it is the highest value item on this list.** Google treats a LinkedIn profile
as a strong, human-verified identity signal. A link from here to your site, and from
your site back to LinkedIn, is the single most effective way to get your name
associated with your projects for entity-based and AI-overview searches.

**On your LinkedIn profile:**

- [ ] Headline should name your discipline and location, e.g.
      `BIM Architectural Engineer | Architectural Design & Construction Coordination | Riyadh, Saudi Arabia`
- [ ] Turn on the **"Add profile section" → Services** entry and list:
      Architectural Design, BIM Coordination, Architectural Shop Drawings,
      Construction Coordination, 3D Architectural Visualization,
      Technical Documentation, Saudi Building Code Compliance
- [ ] Location set to `Riyadh, Saudi Arabia`
- [ ] Add your education: `University of Engineering and Technology (UET)`,
      `Bachelor of Architecture (B.Arch), 2015 – 2019`
- [ ] Add Licenses & certifications:
      `Saudi Council of Engineers — Registered`,
      `Pakistan Council of Architects & Town Planners — Certified`
- [ ] In the **About** section, name your actual projects by name. Write two or three
      plain sentences, e.g. "Currently BIM Architectural Engineer at Youssef Marroun
      Contracting Co. in Riyadh, working on the Riyadh Air Training Centre inside the
      GACA Complex and distribution logistics for NUPCO in Al Jouf." LinkedIn content
      is heavily indexed and is frequently surfaced in AI overviews.
- [ ] **Website field** → your production domain. This is the `sameAs` link.
- [ ] Featured section: link 3 of your project pages:
      - `/work/riyadh-air-training-centre`
      - `/work/nupco-al-jouf`
      - `/work/red-sea-transportation-hub-qc-lab`

**Then tell me your LinkedIn URL** and I will add it to `sameAs` in
`src/data/identity.ts`. That single change is worth more than any further article.

**Ongoing:** one short post per month. A site photograph of real work with three or
four sentences about a real decision. Posts accumulate and are indexed.

---

## 2. Google Business Profile — biggest lever for local search

**Why.** For anything with a location in it — "architect Riyadh", "architectural
engineer Saudi Arabia" — the Maps pack outranks organic results. A GBP listing is
free and is the only way into that pack.

**Note:** a service-area business (no public address) is the right structure for you.
Choose the category `Architect` as primary.

**Data to enter — must match `src/data/identity.ts` exactly, or the listing gets
suspended for inconsistency:**

| Field | Value | Status |
| --- | --- | --- |
| Business name | Eibad Hassan Shah | TODO confirm |
| Primary category | Architect | TODO confirm |
| Additional categories | Building Contractor, BIM Consultant | TODO confirm |
| Street address | _(service-area business — leave hidden)_ | n/a |
| City | Riyadh | TODO confirm |
| Region | Riyadh Province | TODO confirm |
| Postal code | — | TODO |
| Phone | — | TODO: use a number you actually answer |
| Website | production domain | TODO |
| Hours | — | TODO: e.g. Sun–Thu 09:00–18:00 |

**Then:**
- [ ] Write the business description (750 chars). Name your projects and your
      discipline naturally — this is one of the few places keyword repetition is
      genuinely appropriate, because it is a business listing, not an article.
- [ ] Upload real photographs: the project exteriors from `public/projects/`
- [ ] Ask Youssef Marroun Contracting Co. to add you as a staff member on
      **their** GBP. Employer listings are a strong local ranking input and you
      cannot do this yourself.
- [ ] Add a booking or contact link pointing at `/#contact`

---

## 3. SCE and PCATP — corroborating entities

**Why.** These are independent, third-party records that you are a registered
architect in Saudi Arabia. They are exactly the kind of corroboration that makes an
entity credible, and they are currently invisible to search engines.

- [ ] **Saudi Council of Engineers** — check whether the public member register has a
      per-member lookup URL. If it does, add it to `credentials[].url` in
      `src/data/identity.ts` so it becomes `hasCredential` in the schema.
- [ ] **PCATP** — same check for their registered-architects listing.
- [ ] On LinkedIn, add both under Licenses & certifications (see item 1). The
      LinkedIn entries are the ones that actually get indexed.

---

## 4. Search Console + Bing — 10 minutes

The sitemap already works. It just needs submitting.

**Google Search Console**
- [ ] Go to `search.google.com/search-console`
- [ ] Add property → **Domain** type → `search.google.com/search-console` verify via DNS
      (Domain type covers all subdomains and is what you want on Vercel)
- [ ] Sitemaps → submit `https://<your-domain>/sitemap.xml`
- [ ] URL Inspection → paste the homepage → `Request Indexing`
- [ ] Repeat for the 5 project pages and the new articles
- [ ] **After ~2 weeks**, check Performance → Queries. That is the only reliable way
      to know which of these pages are working.

**Bing Webmaster Tools** — genuinely worth the 5 minutes, and it is the easiest way
to get indexed by both Bing and Copilot, which is where a lot of AI answers now come from.
- [ ] `bing.com/webmasters` → import from Google Search Console
- [ ] Submit the same sitemap

**Also worth knowing:** Google does not use `<meta name="keywords">`. The site still
sets it and it is harmless, but it has zero effect. Ranking comes from content,
entity signals, and links — which is why items 1–3 matter more than anything I can
write in a `<head>` tag.

---

## 5. Confirm these site-side facts

Some things on the site are currently inferences. Correct them at the source and
they flow everywhere — page content, schema and articles all read the same files.

- [ ] **Project years.** CDC, NUPCO and French Fries are marked
      `yearSource: "inferred"` in `src/data/projects.json`. The YMCO company profile
      gives no dates for them. Correct the `year` field for each.
- [ ] **CDC status.** The YMCO profile literally says `On completed`, which is a typo
      in the source. Currently read as `Completed`. Confirm.
- [ ] **Your LinkedIn, Instagram or X URLs** → into `sameAs`.
- [ ] **Riyadh Air interiors.** The Stylus ASD visuals are the designer's work, not
      yours. They are currently credited in the article. If you have your own Revit or
      V-Ray visuals of that project, add them to `images[]` with `kind: "render"`.

---

## What is already done on the site

- [x] `Person` schema with `sameAs`, `alumniOf`, `hasCredential`, `worksFor`
- [x] City-level `areaServed` (Riyadh, Al Jouf, Red Sea, Sudair, and Pakistan cities)
- [x] `BreadcrumbList` schema on every article and every case study
- [x] Real per-page `lastModified` in the sitemap (was hardcoded to one date)
- [x] Per-article 1200×630 OG images generated from the article title — previously
      every article shared the same profile photo
- [x] `Article` schema with author linked to the person entity via `@id`
- [x] 5 project articles, each cross-linked to its case study
- [x] Article → case study internal links, so the two page types reinforce each other
- [x] Sitemap and robots.txt including all 13 articles and 5 case studies
- [x] All 33 project images local and optimized (AVIF/WebP via `next/image`)
- [x] Remote placeholder image host removed from `next.config.ts`
