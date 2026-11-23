(() => {
  'use strict';

  const games = Array.isArray(window.NULLLATTE_GAMES)
    ? [...window.NULLLATTE_GAMES].sort((a, b) => a.displayOrder - b.displayOrder)
    : [];
  const grid = document.querySelector('.game-grid');
  const filters = document.querySelectorAll('.flavor-filters button');
  if (!grid) return;

  const readLanguage = () => {
    if (window.NulllatteI18n) return window.NulllatteI18n.language;
    try { return localStorage.getItem('nulllatte-language') === 'en' ? 'en' : 'ja'; }
    catch (_) { return 'ja'; }
  };

  const cards = games.map(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.gameId = game.id;
    card.dataset.flavors = game.flavors.join(' ');
    card.dataset.i18nIgnore = '';

    const image = document.createElement('img');
    image.src = game.image;
    image.alt = game.imageAlt;

    const title = document.createElement('h3');
    title.textContent = game.title;

    const description = document.createElement('p');
    description.className = 'game-description';

    const links = document.createElement('div');
    links.className = 'game-links';
    game.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = link.label;
      links.append(anchor);
    });

    card.append(image, title, description, links);
    grid.append(card);
    return { element: card, description, game };
  });

  function updateLanguage(language = readLanguage()) {
    const key = language === 'en' ? 'en' : 'ja';
    cards.forEach(({ description, game }) => { description.textContent = game.description[key]; });
  }

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const flavor = button.dataset.flavor;
      filters.forEach(filter => filter.classList.toggle('active', filter === button));
      cards.forEach(({ element, game }) => {
        element.hidden = flavor !== 'all' && !game.flavors.includes(flavor);
      });
    });
  });

  window.addEventListener('nulllatte:languagechange', event => updateLanguage(event.detail.language));
  updateLanguage();
})();
