(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const closeMenu = () => {
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', '메뉴 열기');
    nav?.classList.remove('open');
  };
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    nav.classList.toggle('open', open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  const filters = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-category]')];
  const grid = document.querySelector('.project-grid');
  const archive = document.querySelector('.archive');
  const status = document.querySelector('#filter-status');
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let count = 0;
    projects.forEach(p => {
      p.hidden = category !== 'all' && category !== p.dataset.category;
      if (!p.hidden) count++;
    });
    grid?.classList.toggle('filtered', category !== 'all');
    if (grid) grid.hidden = ![...grid.children].some(p => !p.hidden);
    if (archive) archive.hidden = ![...archive.querySelectorAll('[data-category]')].some(p => !p.hidden);
    if (status) status.textContent = `${button.childNodes[0].textContent.trim()} ${count}개 프로젝트`;
  }));
  const sections = [...document.querySelectorAll('main > section[id]')];
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) nav?.querySelectorAll('a').forEach(a => {
          const active = a.getAttribute('href').endsWith('#' + entry.target.id);
          a.classList.toggle('active', active);
          if (active) a.setAttribute('aria-current', 'location');
          else a.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-15% 0px -60% 0px', threshold:0});
    sections.forEach(s => observer.observe(s));
  }
  document.querySelector('#print-page')?.addEventListener('click', () => window.print());
  const demo = document.querySelector('#load-demo');
  demo?.addEventListener('click', () => {
    const container = document.querySelector('#demo-container');
    if (container.querySelector('img')) return;
    demo.disabled = true;
    demo.textContent = '시연 불러오는 중…';
    const img = new Image();
    img.alt = '2026년 10월 15일 최종 발표의 사람 동작·실물 로봇팔·Unity 통합 시연';
    img.addEventListener('load', () => { demo.textContent = '시연 재생 중'; });
    img.addEventListener('error', () => {
      img.remove(); demo.disabled = false; demo.textContent = '시연 다시 불러오기 ▷';
      container.textContent = '시연을 불러오지 못했습니다. 아래 GitHub에서 원본 자료를 확인할 수 있습니다.';
    });
    img.src = demo.dataset.src;
    container.replaceChildren(img);
  });
})();
