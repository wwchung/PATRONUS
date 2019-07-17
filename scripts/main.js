let firstName = 'Sam';
let lastName = 'Caprice';

let fullNameObj = document.getElementById('full-name');
fullNameObj.innerHTML = `${firstName} ${lastName}`;

// ----- QUICK HELP ----- //

let helpObj = document.getElementById('help');
let helpIconObj = document.getElementById('help-icon')
let helpCloseIconObj = document.getElementById('help-close-icon');
let helpAppObj = document.getElementsByClassName('help-app')[0];
let helpAppHeader = document.getElementById('help-app-header');

function toggleHelp() {
  helpIconObj.classList.toggle('hidden');
  helpCloseIconObj.classList.toggle('hidden');
  helpAppObj.classList.toggle('help-app-visible');
  setTimeout(resetDragHelp, 200);
}

// Help button
helpObj.addEventListener('click', function() {
  toggleHelp();
});

// Help link in side nav
let helpItemObj = document.getElementById('help-item');
helpItemObj.addEventListener('click', function() {
  toggleMenu();
  toggleHelp();
});

function startDragHelp(e) {
  let distX = posX - e.clientX;
  let distY = posY - e.clientY;
  posX = e.clientX;
  posY = e.clientY;
  helpAppObj.style.top = `${helpAppObj.offsetTop - distY}px`;
  helpAppObj.style.left = `${helpAppObj.offsetLeft - distX}px`;
  helpAppObj.style.transition = 'none';
}

function stopDragHelp(e) {
  document.onmouseup = null;
  document.onmousemove = null;
  helpAppObj.style.transition = '.2s';
}

function resetDragHelp() {
  helpAppObj.style.top = null;
  helpAppObj.style.left = null;
  helpAppObj.style.bottom = '6.25rem';
  helpAppObj.style.right = '1.25rem';
}

let posX;
let posY;

// Allow dragging
helpAppHeader.addEventListener('mousedown', e => {
  posX = e.clientX;
  posY = e.clientY;
  document.onmouseup = stopDragHelp;
  document.onmousemove = startDragHelp;
});

// ----- SIDE NAV ----- //

let menuObj = document.getElementById('menu');
let menuIconObj = document.getElementById('menu-icon');
let menuCloseIconObj = document.getElementById('menu-close-icon');
let sideNavObj = document.getElementsByClassName('side-nav')[0];
let sideNavOverlayObj = document.getElementsByClassName('side-nav-overlay')[0];

function toggleMenu() {
  menuIconObj.classList.toggle('hidden');
  menuCloseIconObj.classList.toggle('hidden');
  sideNavObj.classList.toggle('side-nav-visible');
  sideNavOverlayObj.classList.toggle('side-nav-overlay-visible');
}

// Menu button
menuObj.addEventListener('click', function() {
  toggleMenu();
  
  // Close help
  if (helpAppObj.classList.contains('help-app-visible')) {
    toggleHelp();
  }
});

// Remove overlay
sideNavOverlayObj.addEventListener('click', function() {
  toggleMenu();
});