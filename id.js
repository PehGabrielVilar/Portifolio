const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const targetSection = document.querySelector(event.target.getAttribute('href'));
  const targetPosition = targetSection.offsetTop;

  scrollToPosition(targetPosition);
}

function scrollToPosition(to) {
  const startPosition = window.pageYOffset;
  const distance = to - startPosition;
  const duration = 1000;
  let start = null;

  function scrollAnimation(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const easing = easeInOutCubic(Math.min(progress / duration, 1));
    const newPosition = startPosition + distance * easing;
    window.scrollTo(0, newPosition);

    if (progress < duration) {
      requestAnimationFrame(scrollAnimation);
    } else {
      enableScroll();
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  disableScroll();
  requestAnimationFrame(scrollAnimation);
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}

