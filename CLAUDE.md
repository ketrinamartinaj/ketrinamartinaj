# Ketrina Martinaj — Professional Website

Personal portfolio for Ketrina Martinaj, ergonomist and occupational safety specialist based in Pisa, Italy.

## Architecture (strict separation of concerns)

```
index.html          → Page structure + <template> elements (layout/markup)
assets/css/styles.css → All visual styling (colors, typography, spacing)
assets/js/data.js   → All content and translations (3 languages)
assets/js/main.js   → Rendering logic only (no content, no styles)
assets/images/      → Profile photo goes here (see below)
.nojekyll           → Prevents GitHub Pages from running Jekyll
```

**To change layout/markup** → edit `<template>` blocks at the bottom of `index.html`
**To change colors/fonts**  → edit CSS custom properties in `styles.css` (top of file, `:root`)
**To change content/copy**  → edit `data.js` (no JS logic changes needed)
**To add a new section**    → add HTML in `index.html`, CSS in `styles.css`, and a renderer in `main.js`

## Languages supported
- English (`en`) — default
- Spanish (`es`)
- Italian (`it`)

Language choice is persisted in `localStorage` under the key `km_lang`.
Browser language is auto-detected on first visit.

### Adding a new language

1. Add a new key to **every multilingual object** in `data.js`:
   - `summary`
   - `experience[*].title`
   - `experience[*].responsibilities`
   - `education[*].degree`, `education[*].note`
   - `skills.technical`, `skills.itTools`
   - `languages[*].name`, `languages[*].level`
   - `certifications[*].name`
   - `i18n` (the entire translations block)
2. Add a `<button class="lang-btn" data-lang="XX">XX</button>` to the lang-switcher in `index.html`
3. Add the new code to the `SUPPORTED` array in `main.js`

## Profile photo

Place a square photo at `assets/images/profile.jpg`. The `<img>` in the hero section
will show it; if the file is missing, it gracefully falls back to the "KM" initials circle.

For best quality: use a square crop, minimum 400×400 px, ideally 800×800 px.

## Updating content

All content lives in `data.js`. The top-level exports:

| Variable         | Description                                      |
|------------------|--------------------------------------------------|
| `personal`       | Name, email, phone, location (language-neutral)  |
| `summary`        | Professional profile paragraph (3 languages)     |
| `experience`     | Array of work experience entries                 |
| `education`      | Array of education entries                       |
| `skills`         | Object with `technical` and `itTools` arrays     |
| `languages`      | Array with name, level, proficiency (0–100)      |
| `certifications` | Array grouped by `category`                      |
| `i18n`           | All UI labels, nav items, section headings       |

### Adding a work experience entry

```js
{
  id: 'unique-id',          // kebab-case, used internally
  title: { en: '', es: '', it: '' },
  organization: 'Company Name',
  location: 'City, Region',
  startDate: { month: 1, year: 2024 },
  endDate: null,            // null = current role; or { month: 12, year: 2024 }
  responsibilities: {
    en: ['Task one', 'Task two'],
    es: ['...'],
    it: ['...']
  }
}
```

### Certification categories

Valid values for `category`: `'Ergonomics'`, `'Safety'`, `'IT'`, `'Language'`

To add a new category, also add its translated label in `i18n[lang].certCategories`.

## Deploying to GitHub Pages

1. Create a GitHub repository (e.g. `ketrinamartinaj.github.io` or any name)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. The site will be live at `https://<username>.github.io/<repo-name>/`

The `.nojekyll` file at the root prevents Jekyll from processing the site, which is
required so that `assets/` files are served correctly.

### Custom domain (optional)

Add a `CNAME` file at the root containing only your domain name:
```
ketrinamartinaj.com
```
Then configure an A record pointing to GitHub Pages IPs in your DNS settings.

## Development

No build step required — plain HTML, CSS, and vanilla JS.

Open `index.html` in any browser or use a local server:
```bash
# Python
python -m http.server 8080
# Node (npx)
npx serve .
```

## Subject area context

Ketrina specialises in:
- **Ergonomic analysis** of workplaces and production lines
- **Biomechanical overload risk assessment** using:
  - **OCRA** (Occupational Repetitive Actions) — for upper-limb repetitive tasks
  - **NIOSH** — for manual material handling / lifting
  - **RULA** (Rapid Upper Limb Assessment) — quick postural screening
  - **REBA** (Rapid Entire Body Assessment) — whole-body posture risk
- **D.Lgs. 81/08** — Italian Consolidated Health & Safety at Work Act
- **ASPP / RSPP** — Addetto / Responsabile Servizio Prevenzione e Protezione
- **OsTools** — specialised software for ergonomic reporting

Current employer: Centro Italiano di Ergonomia (CIE), Pisa (Oct 2024–present)
