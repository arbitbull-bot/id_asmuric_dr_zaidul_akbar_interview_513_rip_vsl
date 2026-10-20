document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.comment').forEach(function (comment) {
    const buttons = [comment.querySelector('.comments__like'), comment.querySelector('.comments__dislike')];
    const counters = [comment.querySelector('.likes'), comment.querySelector('.dislikes')];
    const initial = counters.map(function (el) { return Number(el.textContent); });
    let selected = -1;
    buttons.forEach(function (button, index) {
      button.type = 'button';
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', function () {
        selected = selected === index ? -1 : index;
        counters.forEach(function (el, i) { el.textContent = initial[i] + (selected === i ? 1 : 0); });
        buttons.forEach(function (el, i) { el.setAttribute('aria-pressed', String(selected === i)); });
      });
    });
  });
  document.querySelectorAll('.make-comment').forEach(function (link) {
    link.href = '#container_video';
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const order = document.getElementById('order');
      const target = getComputedStyle(order).display === 'none' ? document.getElementById('container_video') : order;
      target.scrollIntoView({behavior: 'smooth'});
    });
  });
});
