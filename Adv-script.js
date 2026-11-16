document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('container');

  const wrapper = document.querySelector('.wrapper');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');

  openBtn?.addEventListener('click', () => {
    const targetPage = openBtn.dataset.target || 'Adv-poem.html';

    window.location.href = targetPage;
  });

  closeBtn?.addEventListener('click', () => {
    wrapper?.classList.remove('open');
    closeBtn.style.display = 'none';
    if (openBtn) {
      openBtn.style.display = 'inline-block';
    }
  });
});