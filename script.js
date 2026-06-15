const filterButtons = document.querySelectorAll('.filter-item');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.textContent.trim();

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (category === 'All' || cardCategory === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

const skillFills = document.querySelectorAll('.skill-fill');
const skillsSection = document.querySelector('#skills');

function animateSkillBars() {
  skillFills.forEach((fill) => {
    const width = fill.dataset.fill;
    if (width) {
      fill.style.width = width;
      fill.classList.add('animated');
    }
  });
}

if (skillsSection) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        animateSkillBars();
        obs.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(skillsSection);
}

document.querySelectorAll('a[href^="#skills"]').forEach((link) => {
  link.addEventListener('click', () => {
    animateSkillBars();
  });
});

const achievementToggles = document.querySelectorAll('.achievement-toggle');
achievementToggles.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.achievement-card');
    if (!card) return;

    const isExpanded = card.classList.toggle('expanded');
    button.textContent = isExpanded ? 'Collapse' : 'View details';
  });
});
