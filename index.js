//////////////////////////////// Hover animation

const transitionTimeIn = 0.1;
const transitionTimeOut = 0.4;
const transformScale = 1.03;

const hoverElements = document.querySelectorAll('.hover-element, .button');

hoverElements.forEach(hoverElement => {
  hoverElement.style.position = 'relative';
  hoverElement.style.display = 'inline-flex';

  const hoverOverlay = document.createElement('div');
  hoverOverlay.classList.add('hover-overlay');
  hoverElement.insertBefore(hoverOverlay, hoverElement.firstChild);

  // Animation in
  hoverElement.addEventListener('mouseenter', () => {
    hoverElement.style.transform = `scale(${transformScale})`;
    hoverOverlay.style.opacity = '1';
    hoverOverlay.style.transition =
      `opacity ${transitionTimeIn}s ease, 
      transform ${transitionTimeIn}s ease`;
    hoverElement.style.transition = `transform ${transitionTimeIn}s ease`;
  });

  // Animation out
  hoverElement.addEventListener('mouseleave', () => {
    hoverElement.style.transform = 'scale(1)';
    hoverOverlay.style.opacity = '0';
    hoverOverlay.style.transition =
      `opacity ${transitionTimeOut}s ease, 
      transform ${transitionTimeOut}s ease`;
    hoverElement.style.transition = `transform ${transitionTimeOut}s ease`;
  });
});
