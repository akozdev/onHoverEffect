import './oncursor/index';

const photoLayer = document.querySelector('.photo-layer');
let handleMouseMove;

photoLayer.addEventListener('mouseenter', handleHover);
photoLayer.addEventListener('mouseleave', handleLeave);

function handleHover(e) {
  const textEl = createOnHoverText(e);

  handleMouseMove = function handleMouseMove(e) {
    const rect = e.target.getBoundingClientRect();
    const [x, y] = [
      Math.floor(e.clientX - rect.left),
      Math.floor(e.clientY - rect.top)
    ];

    textEl.style.transform = `translate(${x}px, ${y}px)`;
  };

  e.target.addEventListener('mousemove', handleMouseMove);
}

function handleLeave(e) {
  removeOnHoverText(e);
  e.target.removeEventListener('mousemove', handleMouseMove);
}

function createOnHoverText(e) {
  const text = e.target.dataset.onhovertext || '';

  const textEl = document.createElement('div');
  textEl.classList.add('onHoverText');
  textEl.textContent = text;

  e.target.appendChild(textEl);
  return textEl;
}

function removeOnHoverText(e) {
  const textEl = e.target.children[0];
  e.target.removeChild(textEl);
}
