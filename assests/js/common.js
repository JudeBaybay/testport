const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
  navlink.forEach((a) => a.classList.remove('active-link'));
  this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-awards');
  const allAwards = document.querySelectorAll('#awards-grid .award__item');
  const awardsSection = document.getElementById('awards');

  let isExpanded = false;

  toggleBtn.addEventListener('click', () => {
    allAwards.forEach((item, index) => {
      if (index >= 4) {
        if (!isExpanded) {
          item.style.display = 'block';
          void item.offsetWidth;
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      }
    });

    // Scroll back to awards section when collapsing
    if (isExpanded) {
      awardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    toggleBtn.textContent = isExpanded ? 'Show More' : 'Show Less';
    isExpanded = !isExpanded;
  });
});