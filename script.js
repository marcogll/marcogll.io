// Detect drag on mobile devices to show the bio
document.addEventListener('DOMContentLoaded', (event) => {
  const profilePicture = document.getElementById('profilePicture');
  const bio = document.getElementById('bio');

  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    if (touchendX < touchstartX) {
      bio.style.display = 'block';
      bio.style.opacity = 0;
      setTimeout(() => { bio.style.opacity = 1; }, 300); // Delay before fading in
    }
    if (touchendX > touchstartX) {
      bio.style.opacity = 1;
      setTimeout(() => { bio.style.opacity = 0; bio.style.display = 'none'; }, 300); // Delay before fading out
    }
  }

  profilePicture.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  });

  profilePicture.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });
});
