// Regalos de Boda — script.js
// Agrega interacciones y efectos a la tarjeta de regalos

document.addEventListener('DOMContentLoaded', () => {

  // ── Animación de entrada de la tarjeta ──
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  });

  // ── Animación escalonada de las opciones ──
  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
    option.style.opacity = '0';
    option.style.transform = 'translateX(-10px)';
    option.style.transition = `opacity 0.5s ease ${0.4 + index * 0.15}s, transform 0.5s ease ${0.4 + index * 0.15}s`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        option.style.opacity = '1';
        option.style.transform = 'translateX(0)';
      });
    });
  });

  // ── Efecto ripple en los botones al hacer clic ──
  const buttons = document.querySelectorAll('.btn-gold');
  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-effect 0.5s linear;
        pointer-events: none;
      `;

      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);

      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // ── Inyectar keyframes para el ripple ──
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-effect {
      to {
        transform: scale(2.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

});
