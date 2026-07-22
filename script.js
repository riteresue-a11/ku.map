const spots = document.querySelectorAll('.spot');
const sections = document.querySelectorAll('.info-section');

function activateSection(targetId) {
  spots.forEach((spot) => {
    spot.classList.toggle('active', spot.dataset.target === targetId);
  });

  sections.forEach((section) => {
    section.classList.toggle('active', section.id === targetId);
  });
}

spots.forEach((spot) => {
  spot.addEventListener('click', () => activateSection(spot.dataset.target));
});
