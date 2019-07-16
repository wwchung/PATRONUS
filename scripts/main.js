let firstName = 'Sam';
let lastName = 'Caprice';

let fullNameObj = document.getElementById('full-name');
fullNameObj.innerHTML = `${firstName} ${lastName}`;

// ----- QUICK HELP ----- //

let helpObj = document.getElementById('help');
let helpIconObj = document.getElementById('help-icon')
let helpCloseIconObj = document.getElementById('help-close-icon');
let helpAppObj = document.getElementsByClassName('help-app')[0];

function toggleHelp() {
  helpIconObj.classList.toggle('hidden');
  helpCloseIconObj.classList.toggle('hidden');
  helpAppObj.classList.toggle('help-app-visible');
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