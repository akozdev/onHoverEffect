const onHoverElements = document.querySelectorAll('img[data-onhover]');

onHoverElements.forEach(onHoverElement => {
  onHoverElement.addEventListener('mouseenter', handleMouseEnter);
});

function handleMouseEnter(e) {
  const { onhoverText, onhoverBgColor, onhoverColor } = e.target.dataset;
  const onHoverEffectEl = createOnHoverEffectEl(
    onhoverText,
    onhoverBgColor,
    onhoverColor
  );

  document.body.appendChild(onHoverEffectEl);

  const handleMouseMoveCopy = handleMouseMove.bind(null, onHoverEffectEl);

  e.target.addEventListener('mousemove', handleMouseMoveCopy);
  e.target.addEventListener('mouseleave', mouseLeaveEvent => {
    e.target.removeEventListener('mousemove', handleMouseMoveCopy);
    onHoverEffectEl.remove();
  });
}

function handleMouseMove(onHoverEffectEl, e) {
  const [x, y] = [e.clientX, e.clientY];
  onHoverEffectEl.style.top = y + 'px';
  onHoverEffectEl.style.left = x + 'px';
}

function createOnHoverEffectEl(text, bgColor, color) {
  const el = document.createElement('div');
  el.style.backgroundColor = bgColor;
  el.style.color = color;
  el.style.fontSize = '3rem';
  el.style.position = 'absolute';
  el.style.padding = '3px 6px';
  el.style.pointerEvents = 'none';
  el.textContent = text;
  el.classList.add('onHoverText');

  return el;
}
