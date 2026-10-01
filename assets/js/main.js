(function () {
  // Mobile menu
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.nav-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Solutions dropdown
  document.querySelectorAll('.has-dd').forEach(function (li) {
    var btn = li.querySelector('.nav-link');
    var hoverable = window.matchMedia('(hover: hover) and (min-width: 961px)');
    function set(open) {
      li.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      set(!li.classList.contains('open'));
    });
    li.addEventListener('mouseenter', function () { if (hoverable.matches) set(true); });
    li.addEventListener('mouseleave', function () { if (hoverable.matches) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    document.addEventListener('click', function (e) { if (!li.contains(e.target)) set(false); });
  });

  // Hero: scattered -> connected
  var sys = document.querySelector('.system');
  if (sys) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      sys.classList.add('connected');
      sys.querySelectorAll('animateMotion').forEach(function (a) { a.remove(); });
    } else {
      setTimeout(function () { sys.classList.add('connected'); }, 350);
    }
  }

  // Year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Contact form (Web3Forms)
  var form = document.getElementById('contact-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var key = form.querySelector('[name="access_key"]').value;
      status.className = 'form-status';
      if (!key || key.indexOf('YOUR_') === 0) {
        status.textContent = 'The form is not connected yet. Please email sudheer@vedryxa.com or message us on WhatsApp.';
        status.classList.add('err');
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Sending…';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (r) { return r.json(); }).then(function (res) {
        if (res.success) {
          form.reset();
          status.textContent = 'Thank you. Your request has been sent, and we will reply by email or WhatsApp.';
          status.classList.add('ok');
        } else { throw new Error(res.message || 'Error'); }
      }).catch(function () {
        status.textContent = 'Something went wrong while sending. Please email sudheer@vedryxa.com or message us on WhatsApp.';
        status.classList.add('err');
      }).finally(function () {
        btn.disabled = false; btn.textContent = 'Request a strategy session';
      });
    });
  }
})();
