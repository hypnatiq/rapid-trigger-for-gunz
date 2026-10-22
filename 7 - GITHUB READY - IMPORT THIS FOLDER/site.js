(() => {
  const doc = document;
  const root = doc.documentElement;
  const isNotebook = doc.body.classList.contains('notebook-page');
  const select = doc.getElementById('languageSelect');
  const themeButton = doc.getElementById('themeToggle');
  const menuButton = doc.getElementById('menuToggle');
  const nav = doc.getElementById('guideNav') || doc.getElementById('notebookSidebar');
  const progress = doc.getElementById('progressFill');
  const pageIndicator = doc.getElementById('pageIndicator');
  const banner = doc.getElementById('sectionBanner');
  const bannerPage = doc.getElementById('bannerPage');
  const bannerTitle = doc.getElementById('bannerTitle');
  const backToTop = doc.getElementById('backToTop');
  const returnButton = doc.getElementById('returnToReading');
  const originalText = new Map();
  const translatable = [...doc.querySelectorAll('[data-i18n], [data-i18n-html]')];
  const localeParent = { 'es-PE': 'es', 'es-VE': 'es' };

  translatable.forEach(node => originalText.set(node, node.hasAttribute('data-i18n-html') ? node.innerHTML : node.textContent));

  function setLanguage(requested) {
    const chosen = requested || 'en';
    const locale = localeParent[chosen] || chosen;
    const dictionary = window.GIL_TRANSLATIONS?.[locale] || {};
    root.lang = chosen;
    if (select) select.value = chosen;
    translatable.forEach(node => {
      const key = node.dataset.i18n || node.dataset.i18nHtml;
      const value = chosen === 'en' ? originalText.get(node) : dictionary[key];
      if (value == null) return;
      if (node.hasAttribute('data-i18n-html')) node.innerHTML = value;
      else node.textContent = value;
    });
    const titles = window.GIL_TITLES?.[locale];
    if (titles) doc.title = isNotebook ? titles.notebook : titles.guide;
    localStorage.setItem('gil-language', chosen);
  }

  const savedTheme = localStorage.getItem('gil-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  function updateThemeLabel() {
    if (!themeButton) return;
    themeButton.textContent = root.dataset.theme === 'light' ? 'Dark' : 'Light';
  }
  updateThemeLabel();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('gil-theme', root.dataset.theme);
    updateThemeLabel();
  });
  select?.addEventListener('change', event => setLanguage(event.target.value));

  menuButton?.addEventListener('click', () => {
    const open = doc.body.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  });
  nav?.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    doc.body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });

  const publicSections = [...doc.querySelectorAll('.tracked-section')];
  const notebookSections = [...doc.querySelectorAll('.notebook-entry')];
  const sections = publicSections.length ? publicSections : notebookSections;
  const navLinks = [...doc.querySelectorAll('.guide-nav > a[href^="#"], .notebook-nav a[href^="#"]')];
  let currentSection = sections[0] || null;
  let scrollFrame = 0;

  function selectCurrentSection() {
    if (!sections.length) return;
    const readingLine = isNotebook ? Math.max(90, innerHeight * .24) : Math.max(110, innerHeight * .28);
    let selected = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) selected = section;
      else break;
    }
    if (scrollY + innerHeight >= doc.documentElement.scrollHeight - 4) selected = sections.at(-1);
    currentSection = selected;
    navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${selected.id}`));
    const index = sections.indexOf(selected) + 1;
    const page = selected.dataset.page || String(index).padStart(2, '0');
    const title = selected.dataset.title || selected.querySelector('h2')?.textContent?.trim() || 'Research notes';
    if (pageIndicator) pageIndicator.textContent = `Page ${page} / ${String(sections.length).padStart(2, '0')}`;
    if (bannerPage) bannerPage.textContent = `Page ${page}`;
    if (bannerTitle) bannerTitle.textContent = title;
    const bannerVisible = scrollY > Math.max(160, innerHeight * .35);
    banner?.classList.toggle('show', bannerVisible);
    doc.body.classList.toggle('section-banner-visible', Boolean(banner && bannerVisible));
    doc.body.classList.toggle('scroll-blur-active', scrollY > 24);
  }

  function updatePage() {
    scrollFrame = 0;
    const maximum = doc.documentElement.scrollHeight - innerHeight;
    const ratio = maximum > 0 ? Math.min(1, Math.max(0, scrollY / maximum)) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    backToTop?.classList.toggle('show', scrollY > 600);
    selectCurrentSection();
    updateCardShuffle();
  }

  function queuePageUpdate() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updatePage);
  }

  const stackedCards = [...doc.querySelectorAll('.stack-card')];
  function updateCardShuffle() {
    if (!stackedCards.length || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      stackedCards.forEach(card => {
        card.style.removeProperty('--card-exit-blur');
        card.style.removeProperty('--card-exit-opacity');
      });
      return;
    }
    const headerOffset = 114;
    const exitRange = 110;
    stackedCards.forEach(card => {
      const cardBottom = card.getBoundingClientRect().bottom;
      const amount = Math.min(1, Math.max(0, (headerOffset + exitRange - cardBottom) / exitRange));
      card.style.setProperty('--card-exit-blur', `${(amount * 8).toFixed(2)}px`);
      card.style.setProperty('--card-exit-opacity', String(1 - amount * .72));
    });
  }

  addEventListener('scroll', queuePageUpdate, { passive: true });
  addEventListener('resize', queuePageUpdate);
  doc.querySelectorAll('a[href="#top"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      scrollTo({ top: 0, left: 0, behavior });
    });
  });
  navLinks.forEach(link => link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.toggle('active', item === link));
  }));

  function readingTarget(value) {
    try {
      const url = new URL(value, location.href);
      return {
        url,
        path: url.pathname.replace(/\/index\.html$/i, '/') || '/'
      };
    } catch {
      return null;
    }
  }

  doc.querySelectorAll('a.remember-position').forEach(link => {
    link.addEventListener('click', () => {
      localStorage.setItem('gil-return-url', location.href.split('#')[0]);
      localStorage.setItem('gil-return-scroll', String(scrollY));
    });
  });
  const returnUrl = localStorage.getItem('gil-return-url');
  const returnScroll = Number(localStorage.getItem('gil-return-scroll'));
  const returnTarget = returnUrl ? readingTarget(returnUrl) : null;
  const currentTarget = readingTarget(location.href);
  const safeReturnTarget = returnTarget && currentTarget && returnTarget.url.origin === currentTarget.url.origin
    ? returnTarget
    : null;
  const sameReadingPage = Boolean(safeReturnTarget && safeReturnTarget.path === currentTarget.path);
  let samePageReturnScroll = NaN;

  if (returnUrl && !safeReturnTarget) {
    localStorage.removeItem('gil-return-url');
    localStorage.removeItem('gil-return-scroll');
  } else if (sameReadingPage) {
    samePageReturnScroll = returnScroll;
    localStorage.removeItem('gil-return-url');
    localStorage.removeItem('gil-return-scroll');
  } else if (returnButton && safeReturnTarget && Number.isFinite(returnScroll)) {
    returnButton.classList.add('show');
    returnButton.addEventListener('click', () => {
      localStorage.setItem('gil-restore-scroll', String(returnScroll));
      location.href = safeReturnTarget.url.href;
    });
  }
  const queuedRestoreScroll = Number(localStorage.getItem('gil-restore-scroll'));
  const restoreScroll = Number.isFinite(queuedRestoreScroll) && queuedRestoreScroll > 0
    ? queuedRestoreScroll
    : samePageReturnScroll;
  if (Number.isFinite(restoreScroll) && restoreScroll > 0) {
    localStorage.removeItem('gil-restore-scroll');
    requestAnimationFrame(() => scrollTo({ top: restoreScroll, behavior: 'smooth' }));
  }

  const definitions = {
    actuation: {
      title: 'Actuation point',
      type: 'Keyboard term',
      plain: 'The fixed depth where the keyboard first recognizes a released key as pressed.',
      gunz: 'It decides how far you press before the first tap of a directional input is sent.',
      link: isNotebook ? 'index.html#glossary-actuation' : '#glossary-actuation'
    },
    rtd: {
      title: 'RT D · Deactivate',
      type: 'RT D',
      plain: 'The upward distance an active key travels before the keyboard reports it as released.',
      gunz: 'It decides how much you lift before the keyboard stops recognizing the first tap as held.',
      link: isNotebook ? 'index.html#glossary-rtd' : '#glossary-rtd'
    },
    rta: {
      title: 'RT A · Activate',
      type: 'RT A',
      plain: 'How far the key must move down after key-travel reversal before the keyboard recognizes the next press.',
      gunz: 'It decides how much re-press travel is needed before the second or later repeated tap is recognized.',
      link: isNotebook ? 'index.html#glossary-rta' : '#glossary-rta'
    },
    pvp: {
      title: 'CW/TDM validation',
      type: 'Guide term',
      plain: 'Testing the training result against real players before saving the setting you prefer.',
      gunz: 'It checks whether the setting stays clean when a real fight changes your rhythm and attention.',
      link: isNotebook ? 'index.html#glossary-pvp' : '#glossary-pvp'
    }
  };
  const glossaryDetails = [...doc.querySelectorAll('.glossary-columns details')];
  function openOnlyGlossaryDetail(activeDetail) {
    glossaryDetails.forEach(detail => {
      if (detail !== activeDetail) detail.open = false;
    });
  }
  glossaryDetails.forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) openOnlyGlossaryDetail(detail);
  }));
  const initiallyOpenGlossaryDetails = glossaryDetails.filter(detail => detail.open);
  initiallyOpenGlossaryDetails.slice(1).forEach(detail => { detail.open = false; });
  const panel = doc.getElementById('termPanel');
  const panelTitle = doc.getElementById('termPanelTitle');
  const panelBody = doc.getElementById('termPanelBody');
  const panelLink = doc.getElementById('termPanelLink');
  doc.querySelectorAll('button[data-term]').forEach(button => button.addEventListener('click', () => {
    const item = definitions[button.dataset.term];
    if (!panel || !item) return;
    const sameDefinitionIsOpen = panel.classList.contains('open') && button.getAttribute('aria-expanded') === 'true';
    if (sameDefinitionIsOpen) {
      closeTermPanel();
      return;
    }
    doc.querySelectorAll('button[data-term][aria-expanded="true"]').forEach(openButton => openButton.setAttribute('aria-expanded', 'false'));
    panel.querySelector('.term-panel-label').textContent = item.type;
    panelTitle.textContent = item.title;
    panelBody.innerHTML = `<h3>Plain-English definition</h3><p>${item.plain}</p><h3>How it applies in GunZ</h3><p>${item.gunz}</p>`;
    panelLink.href = item.link;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    button.setAttribute('aria-expanded', 'true');
    doc.getElementById('termPanelClose')?.focus({ preventScroll: true });
  }));
  function closeTermPanel() {
    doc.querySelectorAll('button[data-term][aria-expanded="true"]').forEach(button => button.setAttribute('aria-expanded', 'false'));
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }
  doc.getElementById('termPanelClose')?.addEventListener('click', closeTermPanel);
  panelLink?.addEventListener('click', () => {
    const href = panelLink.getAttribute('href') || '';
    const target = href.startsWith('#') ? doc.querySelector(href) : null;
    if (target?.tagName === 'DETAILS') {
      openOnlyGlossaryDetail(target);
      target.open = true;
    }
    closeTermPanel();
  });
  function openHashedDetails() {
    if (!location.hash) return;
    try {
      const target = doc.querySelector(location.hash);
      if (target?.tagName === 'DETAILS') {
        openOnlyGlossaryDetail(target);
        target.open = true;
      }
    } catch (_) { /* Ignore malformed external hashes instead of interrupting the page. */ }
  }
  openHashedDetails();
  addEventListener('hashchange', openHashedDetails);
  addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel?.classList.contains('open')) closeTermPanel();
  });

  const viewerImages = [...doc.querySelectorAll('.screenshot-card img, [data-image-viewer]')];
  if (viewerImages.length) {
    const viewer = doc.createElement('div');
    viewer.className = 'image-viewer';
    viewer.hidden = true;
    viewer.setAttribute('role', 'dialog');
    viewer.setAttribute('aria-modal', 'true');
    viewer.setAttribute('aria-label', 'Enlarged image');
    viewer.innerHTML = '<button class="image-viewer-close" type="button" aria-label="Close enlarged image">✕</button><img alt=""><div class="image-viewer-footer"><p class="image-viewer-caption"></p><a class="image-viewer-download" href="" download>Download image</a></div>';
    doc.body.append(viewer);

    const viewerImage = viewer.querySelector('img');
    const viewerCaption = viewer.querySelector('.image-viewer-caption');
    const viewerDownload = viewer.querySelector('.image-viewer-download');
    const viewerClose = viewer.querySelector('.image-viewer-close');
    let returnFocus = null;

    function closeScreenshot() {
      if (viewer.hidden) return;
      viewer.hidden = true;
      doc.body.classList.remove('image-viewer-open');
      viewerImage.removeAttribute('src');
      viewerImage.classList.remove('pixel-image');
      returnFocus?.focus({ preventScroll: true });
    }

    function openScreenshot(image) {
      returnFocus = image.closest('button') || image;
      viewerImage.src = image.currentSrc || image.src;
      viewerImage.alt = image.alt || 'Enlarged image';
      viewerImage.classList.toggle('pixel-image', image.dataset.viewerPixel === 'true');
      viewerCaption.textContent = image.dataset.viewerCaption || image.closest('figure')?.querySelector('figcaption')?.textContent?.trim() || image.alt;
      viewerDownload.href = image.currentSrc || image.src;
      viewerDownload.download = image.dataset.viewerDownload || new URL(image.currentSrc || image.src, location.href).pathname.split('/').pop() || 'image';
      viewer.hidden = false;
      doc.body.classList.add('image-viewer-open');
      viewerClose.focus({ preventScroll: true });
    }

    viewerImages.forEach(image => {
      if (image.closest('button')) {
        image.closest('button').addEventListener('click', () => openScreenshot(image));
        return;
      }
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', `${image.alt}. Click to enlarge.`);
      image.addEventListener('click', () => openScreenshot(image));
      image.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openScreenshot(image);
      });
    });
    viewerClose.addEventListener('click', closeScreenshot);
    viewer.addEventListener('click', event => {
      if (event.target === viewer || event.target === viewerImage) closeScreenshot();
    });
    addEventListener('keydown', event => {
      if (event.key === 'Escape') closeScreenshot();
    });
  }

  setLanguage(localStorage.getItem('gil-language') || 'en');
  updatePage();
})();
