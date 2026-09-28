# Vivek Pipaliya — Portfolio

Personal portfolio site, live at **[pipaliyavivek.github.io](https://pipaliyavivek.github.io)**.

Unity Game Developer with 5+ years of experience. Currently Team Lead and Senior Unity C# Developer,
building real-money multiplayer games (Rummy, Teen Patti, Ludo) with socket.io, secure wallet
integration and server-authoritative gameplay.

## Stack

Static HTML/CSS/JS — no build step. Bootstrap 5, AOS, Isotope, Swiper, GLightbox, Typed.js,
PureCounter. Deployed by GitHub Pages straight from `main`.

## Styling

`assets/css/custom.css` holds the current design and loads after the template's `style.css`.
Colours, spacing and shadows come from CSS custom properties on `:root`, with a dark set
under `prefers-color-scheme: dark` and a `[data-theme="dark"]` override. Change a token there
rather than editing rules one by one.

A few selectors deliberately mirror the template's own specificity (`.portfolio #portfolio-flters li`,
`#navbar.nav-menu a`) because the template would otherwise win the cascade. Keep those prefixes
when editing.

## Layout

```
index.html               single-page site (hero, about, facts, skills, resume, portfolio, contact)
portfolio-details.html   project detail template
assets/css/style.css     original template styles
assets/css/custom.css    design layer loaded after style.css (tokens, dark mode, layout)
assets/js/main.js        template behaviour (nav, filters, sliders)
assets/js/contact.js     Formspree contact form + contact-detail reveal
assets/files/Resume.pdf  downloadable CV
assets/img/portfolio/    project screenshots
forms/                   legacy PHP mailer — unused, GitHub Pages cannot run PHP
```

## Local preview

No dependencies. Serve the folder over HTTP so `fetch` and relative paths behave:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Contact form

The form posts to [Formspree](https://formspree.io); submissions are handled in
`assets/js/contact.js`. The endpoint lives in the `<form action>` in `index.html`, and
messages arrive in the Formspree dashboard. Formspree's free tier caps monthly submissions,
so check there if messages stop arriving.

The first submission from a new deployment triggers a one-time confirmation email to the
form owner.
