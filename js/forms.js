/**
 * Curious Works — generic form handling.
 *
 * Forms not yet wired to a real endpoint pass a relative placeholder path
 * (e.g. '/api/join-application') and just simulate a network delay so the
 * UX (loading state, validation, confirmation) still works. Once a form has
 * a real endpoint (currently Formspree — https://formspree.io/f/<id>), pass
 * that full URL as `endpoint` and this function submits to it for real.
 */

function cwSubmitToBackend(endpoint, data) {
  const isRealEndpoint = /^https?:\/\//i.test(endpoint);

  if (!isRealEndpoint) {
    console.info('[Curious Works] Placeholder submission — no backend connected yet.', { endpoint: endpoint, data: data });
    return new Promise(function (resolve) { setTimeout(resolve, 650); });
  }

  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data)
  }).then(function (res) {
    if (res.ok) return res.json().catch(function () { return {}; });
    return res.json().catch(function () { return {}; }).then(function (body) {
      const message = (body && Array.isArray(body.errors) && body.errors.length)
        ? body.errors.map(function (e) { return e.message; }).join(', ')
        : 'Something went wrong submitting the form. Please try again, or email us directly.';
      throw new Error(message);
    });
  });
}

function cwShowFormError(form, message) {
  let el = form.querySelector('.form-submit-error');
  if (!el) {
    el = document.createElement('div');
    el.className = 'form-submit-error';
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.parentNode.insertBefore(el, submitBtn);
  }
  el.textContent = message;
  el.classList.remove('hidden');
}

function cwHideFormError(form) {
  const el = form.querySelector('.form-submit-error');
  if (el) el.classList.add('hidden');
}

/**
 * Wires a <form> to validate, submit (see cwSubmitToBackend above), then
 * swap in a confirmation panel. `options.endpoint` is the route this form
 * submits to (a real URL once one exists, a placeholder path otherwise);
 * `options.onSuccess(data, form)` runs after a successful submission.
 * `options.excludeFields` (array of field names) are collected from the
 * form for validation but stripped out before anything is sent — use this
 * for fields that should never leave the browser, e.g. a password. On
 * failure, a visible error message is shown instead of a fake success.
 */
/** Like Object.fromEntries(new FormData(form)), but joins repeated keys
 * (checkboxes sharing one `name`) instead of silently keeping only the last. */
function cwFormDataToObject(form) {
  const fd = new FormData(form);
  const obj = {};
  new Set(fd.keys()).forEach(function (key) {
    const values = fd.getAll(key);
    obj[key] = values.length > 1 ? values.join(', ') : values[0];
  });
  return obj;
}

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

    cwHideFormError(form);
    const data = cwFormDataToObject(form);
    (opts.excludeFields || []).forEach(function (key) { delete data[key]; });
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
      .catch(function (err) {
        cwShowFormError(form, err.message || 'Something went wrong. Please try again, or email us directly.');
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
