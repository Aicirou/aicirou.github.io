# knullx.me — Minimalist Portfolio

Personal portfolio and engineering showcase of **Ajay Kumar Meena**, Software Engineer specializing in backend systems, distributed architectures, and AI engineering.

Live site: [knullx.me](https://knullx.me)

---

## ✦ Design Philosophy

Inspired by the disciplined aesthetics of **msaktype.com**:
- **Steady Typographic Rhythm**: Strict hierarchy powered by [0xType's](https://github.com/0xType/0xProto) **0xPropo** (proportional variable font) and **0xProto** (monospace font).
- **Subtle Micro-Interactions**: Smooth hover background transitions across experience, projects, skills, and education cards. Interactive monochrome inversion badges for skill tags.
- **Iconic Section Markers**: Clean horizontal rule accents before each section title (`— about`, `— experience`, `— projects`, `— skills`, `— education & certifications`).
- **Harmonious Dual Themes**:
  - **Light Mode**: Crisp, high-contrast monochrome layout accented by deep Royal Blue (`#1d4ed8`) hyperlinks and text-selection highlights.
  - **Dark Mode**: OLED-friendly dark palette (`#09090b`) illuminated by vibrant Electric Lime (`#a3e635`) accents.
- **Zero Framework Overhead**: Handcrafted with pure Semantic HTML5, Vanilla CSS, and lightweight Vanilla JavaScript. No heavy client-side bundles or build steps required.

---

## ✦ Features

- **Instant Theme Switching**: Toggle manually via the top-right button, with automatic synchronization to `prefers-color-scheme` and persistent `localStorage` memory. Supports URL parameter overrides (`?theme=light` or `?theme=dark`).
- **Font Optimization**: Local `.woff2` font preloading (`0xPropo-VariableVF` and `0xProto-Regular`) for zero-layout-shift (CLS) rendering.
- **Responsive & Accessible**: Mobile-first design with fluid typography, responsive section headers, accessible contrast ratios, and semantic structure.
- **SEO & Social Polish**: Structured metadata, canonical URL links, Open Graph tags, and modern SVG favicon.

---

## ✦ Project Structure

```text
├── fonts/
│   ├── 0xPropo-VariableVF.woff2   # Proportional variable font for body & titles
│   ├── 0xProto-Regular.woff2       # Monospace font for code & tags
│   ├── 0xProto-Bold.woff2          # Monospace bold font
│   └── 0xProto-Italic.woff2        # Monospace italic font
├── CNAME                           # Custom domain configuration (knullx.me)
├── index.html                      # Semantic markup & content sections
├── style.css                       # Design tokens, typography, and responsive styles
├── script.js                       # Theme toggle & system listener
└── README.md                       # Project documentation
```

---

## ✦ Local Development

To run and preview the site locally:

### Option 1: Python
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Option 2: Node.js / npx
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` and choose **Open with Live Server**.

---

## ✦ Deployment

Hosted via **GitHub Pages** directly from the `main` branch with automatic HTTPS and custom domain mapping through `CNAME`.

---

## ✦ Credits & Acknowledgments

- Typography by [0xType](https://github.com/0xType/0xProto) (0xProto & 0xPropo)
- Layout and typographic inspiration by [msaktype.com](https://msaktype.com)
