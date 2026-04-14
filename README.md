# Pure Pest Solutions 2.0 Website

Production-ready Next.js website for Pure Pest Solutions, rebuilt for stronger lead generation, better UX, and cleaner long-term maintainability.

## Tech Stack

- Next.js App Router + TypeScript
- Tailwind CSS (v4)
- Vercel-ready deployment
- Server-side Google Places API (New) integration for reviews

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example` and set:

```bash
GOOGLE_MAPS_API_KEY=your_server_side_google_maps_api_key
GOOGLE_PLACE_ID=ChIJbwQKyHTyQ64RsMoxAg7FTwc
```

3. Run dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel (Exact Steps)

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project**.
3. Import `PurePestSolutionsWebsite2.0` repository.
4. In Project Settings > Environment Variables, add:
   - `GOOGLE_MAPS_API_KEY`
   - `GOOGLE_PLACE_ID` with value `ChIJbwQKyHTyQ64RsMoxAg7FTwc`
5. Deploy.
6. After deploy, verify:
   - Homepage quote form submits successfully.
   - `/api/google-reviews` returns data.
   - City/service pages are indexable and load correctly.

## Important Editable Files

### Business content and text
- `data/site-content.ts`
  - Phone number
  - Email
  - Service list
  - Service areas and cities
  - Testimonials
  - Hours
  - CTA copy
  - Social links

### Brand and photo assets
- `public/brand/logo-wordmark.png`
- `public/brand/logo-circle.png`
- `public/images/team-shirt.jpeg`
- `public/images/truck-angle.jpeg`
- `public/images/truck-building-portrait.jpeg`
- `public/images/truck-side.jpeg`

### SEO and metadata
- `lib/seo.ts`
- `app/layout.tsx` (LocalBusiness schema)
- `app/sitemap.ts`
- `app/robots.ts`

### Quote + review integrations
- `app/api/quote/route.ts`
- `lib/quote.ts` (adapter for future email/CRM wiring)
- `app/api/google-reviews/route.ts`
- `lib/google-reviews.ts`

## API Endpoints

- `POST /api/quote`
  - Validates fields server-side
  - Uses adapter pattern for easy email/CRM integration

- `GET /api/google-reviews`
  - Fetches Google Places API (New) Place Details server-side
  - Never exposes API key to the browser
  - Returns fallback testimonial data if unavailable

## Notes for Future Integrations

- Replace `ConsoleQuoteAdapter` in `lib/quote.ts` with:
  - Email provider (Resend/SendGrid/etc.), or
  - CRM webhook adapter
- Keep the API route contract unchanged so frontend form logic remains stable.
