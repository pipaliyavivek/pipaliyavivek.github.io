# Vivek Pipaliya — Portfolio

Personal portfolio site, live at **[pipaliyavivek.github.io](https://pipaliyavivek.github.io)**.

Unity Game Developer with 5+ years of experience. Currently Team Lead and Senior Unity C# Developer,
building real-money multiplayer games (Rummy, Teen Patti, Ludo) with socket.io, secure wallet
integration and server-authoritative gameplay.

## Stack

Static HTML/CSS/JS — no build step. Bootstrap 5, AOS, Isotope, Swiper, GLightbox, Typed.js,
PureCounter. Deployed by GitHub Pages straight from `main`.

## Layout

```
index.html               single-page site (hero, about, facts, skills, resume, portfolio, contact)
portfolio-details.html   project detail template
assets/css/style.css     site styles
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

## Contact form setup

The form posts to Formspree. Create a free form at <https://formspree.io>, then replace
`YOUR_FORM_ID` in the `<form action>` in `index.html`. Until that is set, the form shows a
configuration notice instead of silently failing.
