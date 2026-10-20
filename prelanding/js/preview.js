window.sendBinomEvent = function () {};
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let message = form.querySelector('[role=status]');
      if (!message) { message = document.createElement('p'); message.setAttribute('role', 'status'); form.append(message); }
      message.textContent = 'Mode pratinjau: data tidak dikirim.';
    });
  });
});
