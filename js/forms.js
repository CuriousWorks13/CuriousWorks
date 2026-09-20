/**
 * Curious Works — generic form handling.
 *
 * No backend exists yet. `cwSubmitToBackend()` simulates a network call so the
 * full UX (loading state, validation, confirmation) works today. Once a real
 * API is available, replace the body of `cwSubmitToBackend` with an actual
 * fetch() call — every form on the site already funnels through it, so that
 * is the only place that needs to change.
 */

function cwSubmitToBackend(endpoint, data) {
  // Placeholder — replace with a real request, e.g.:
  // return fetch(endpoint, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // }).then((res) => {
  //   if (!res.ok) throw new Error('Request failed');
  //   return res.json();
  // });
  console.info('[Curious Works] Placeholder submission — no backend connected yet.', { endpoint: endpoint, data: data });
  return new Promise(function (resolve) { setTimeout(resolve, 650); });
}

/**
 * Wires a <form> to validate, "submit" (see above), then swap in a
 * confirmation panel. `options.endpoint` is the placeholder API route this
 * form should hit once a backend exists; `options.onSuccess(data, form)` runs
 * after the simulated submission succeeds.
 */
function cwHandleForm(formSelector, confirmSelector, options) {
  const form = document.querySelector(formSelector);
  const confirmPanel = confirmSelector ? document.querySelector(confirmSelector) : null;
  if (!form) return;
  const opts = options || {};

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalLabel = submitBtn ? submitBtn.textContent : '';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';
    }

    cwSubmitToBackend(opts.endpoint || '/api/placeholder', data)
      .then(function () {
        if (opts.onSuccess) opts.onSuccess(data, form);
        if (confirmPanel) {
          form.classList.add('hidden');
          confirmPanel.classList.remove('hidden');
          confirmPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      });
  });
}

/** Resets a form back to its editable state after a confirmation was shown. */
function cwResetFormView(formSelector, confirmSelector) {
  const form = document.querySelector(formSelector);
  const confirmPanel = confirmSelector ? document.querySelector(confirmSelector) : null;
  if (form) {
    form.reset();
    form.classList.remove('hidden');
  }
  if (confirmPanel) confirmPanel.classList.add('hidden');
}
