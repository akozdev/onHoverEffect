const onHoverElements = document.querySelectorAll('img[data-onhover]');

onHoverElements.forEach(onHoverElement => {
  onHoverElement.addEventListener('mouseenter', handleMouseEnter);
  onHoverElement.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseEnter(e) {
  const { onhoverText, onhoverBgColor, onhoverColor } = e.target.dataset;
  const onHoverEffectEl = createOnHoverEffectEl(
    onhoverText,
    onhoverBgColor,
    onhoverColor
  );

  document.body.appendChild(onHoverEffectEl);

  e.target.addEventListener(
    'mousemove',
    handleMouseMove.bind(null, onHoverEffectEl)
  );
}

function handleMouseLeave(e) {}

function handleMouseMove(onHoverEffectEl, e) {
  const [x, y] = [e.clientX, e.clientY];
  // TODO: Why helper-container covers all other elements including onHoverEffectEl?
  onHoverEffectEl.style.transform = `translate(${x}, ${y});`;
}

function createOnHoverEffectEl(text, bgColor, color) {
  const el = document.createElement('div');
  el.style.backgroundColor = bgColor;
  el.style.color = color;
  el.textContent = text;
  el.classList.add('onHoverText');

  return el;
}
