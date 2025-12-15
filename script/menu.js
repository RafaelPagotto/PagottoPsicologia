(function(){
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('site-menu');
  if(!btn || !menu) return;

  function openMenu(){
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    // trap focus start
    const focusable = menu.querySelectorAll('a, button');
    if(focusable.length) focusable[0].focus();
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocumentClick, true);
  }
  function closeMenu(){
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('click', onDocumentClick, true);
  }
  function onKeyDown(e){
    if(e.key === 'Escape'){
      closeMenu();
    }
  }
  function onDocumentClick(e){
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if(!expanded) return;
    const clickInsideMenu = menu.contains(e.target);
    const clickOnButton = btn.contains(e.target);
    if(!clickInsideMenu && !clickOnButton){
      closeMenu();
    }
  }

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if(expanded){ closeMenu(); } else { openMenu(); }
  });
  // Close when clicking outside panel
  // Keep existing behavior optional based on backdrop structure; handled globally now.
})();
