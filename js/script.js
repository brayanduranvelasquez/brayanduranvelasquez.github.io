let anchorTop = document.getElementById('anchorTop');

window.onscroll = () => {
  let yPosition = window.scrollY;

  if (yPosition > 600) {
    anchorTop.style.display = 'flex';
  } else {
    anchorTop.style.display = 'none';
  }
};

//////////////// REDIRECT ///////////////////////

function redirect(link) {
  window.open(link, '_blank');
}
