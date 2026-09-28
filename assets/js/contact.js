/**
 * Contact form (Formspree) + scraper-resistant contact details.
 */
(function () {
  "use strict";

  /* ---- Reveal email and phone from parts, so plain-text scrapers miss them ---- */
  var EMAIL_USER = 'pipaliyavivek308';
  var EMAIL_HOST = 'gmail.com';
  var PHONE_CC = '+91';
  var PHONE_NUM = '7048641492';

  document.querySelectorAll('.protected-email').forEach(function (el) {
    var address = EMAIL_USER + '@' + EMAIL_HOST;
    var link = document.createElement('a');
    link.href = 'mailto:' + address;
    link.textContent = address;
    el.appendChild(link);
  });

  document.querySelectorAll('.protected-phone').forEach(function (el) {
    var number = PHONE_CC + PHONE_NUM;
    var link = document.createElement('a');
    link.href = 'tel:' + number;
    link.textContent = number;
    el.appendChild(link);
  });

  /* ---- Years of experience, counted from the first job so it never goes stale ---- */
  var CAREER_START = new Date(2020, 11, 1); // Dec 2020, BVM Infotech
  document.querySelectorAll('.years-experience').forEach(function (el) {
    var months = (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 30.44);
    el.textContent = Math.floor(months / 12) + '+ Years';
  });

  /* ---- Formspree submit: JSON response, not the PHP library's plain "OK" ---- */
  document.querySelectorAll('.contact-form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var action = form.getAttribute('action');
      var loading = form.querySelector('.loading');
      var errorBox = form.querySelector('.error-message');
      var sentBox = form.querySelector('.sent-message');

      function fail(message) {
        loading.classList.remove('d-block');
        errorBox.textContent = message;
        errorBox.classList.add('d-block');
      }

      if (!action || action.indexOf('YOUR_FORM_ID') !== -1) {
        fail('The contact form is not configured yet. Please email me directly.');
        return;
      }

      loading.classList.add('d-block');
      errorBox.classList.remove('d-block');
      sentBox.classList.remove('d-block');

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          return response.json().then(function (data) {
            return { ok: response.ok, data: data };
          });
        })
        .then(function (result) {
          if (!result.ok) {
            var errors = result.data && result.data.errors;
            throw new Error(errors ? errors.map(function (e) { return e.message; }).join(', ')
              : 'Form submission failed. Please try again.');
          }
          loading.classList.remove('d-block');
          sentBox.classList.add('d-block');
          form.reset();
        })
        .catch(function (error) {
          fail(error.message);
        });
    });
  });

})();
