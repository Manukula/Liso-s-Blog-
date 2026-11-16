const yearElement = document.getElementById('year');
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navbar && menuToggle) {
  const closeMenu = () => {
    navbar.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  });

  navbar.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

document.querySelectorAll('.info-toggle').forEach((infoToggle) => {
  const infoPanel = document.getElementById(infoToggle.getAttribute('aria-controls'));

  if (!infoPanel) {
    return;
  }

  const closeInfo = () => {
    infoPanel.hidden = true;
    infoToggle.setAttribute('aria-expanded', 'false');
  };

  infoToggle.addEventListener('click', () => {
    const isOpen = infoToggle.getAttribute('aria-expanded') === 'true';
    infoPanel.hidden = isOpen;
    infoToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!infoPanel.contains(event.target) && !infoToggle.contains(event.target)) {
      closeInfo();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !infoPanel.hidden) {
      closeInfo();
      infoToggle.focus();
    }
  });
});

const commentsWidget = document.querySelector('.commonninja_component');

if (commentsWidget) {
  const updateCommentsWidget = () => {
    const commentCards = commentsWidget.querySelectorAll('.comments .comment-card');

    commentCards.forEach((commentCard, index) => {
      if (index >= 4) {
        commentCard.style.setProperty('display', 'none', 'important');
      } else {
        commentCard.style.removeProperty('display');
      }
    });

    commentsWidget.querySelectorAll('input[type="text"]').forEach((input) => {
      input.setAttribute('placeholder', 'Your username');
    });

    commentsWidget.querySelectorAll('textarea').forEach((textarea) => {
      textarea.setAttribute('placeholder', 'Share your thoughts about my blog...');
    });
  };

  const commentsObserver = new MutationObserver(updateCommentsWidget);
  commentsObserver.observe(commentsWidget, { childList: true, subtree: true });
  updateCommentsWidget();
}
