/* Neon Cursor */
const cursor = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* Scroll Reveal */
window.addEventListener('scroll', reveal);
function reveal(){
  let reveals = document.querySelectorAll('.reveal');
  for(let i=0;i<reveals.length;i++){
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add('active');
    }
  }
}

/* Scroll Progress Bar */
window.onscroll = function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};

/*Scroll Shrink */

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

/* Quote Toggle */
function toggleQuote(){
  let quote = document.getElementById("animeQuote");
  quote.style.display = quote.style.display === "block" ? "none" : "block";
}

const musicBtn = document.getElementById('musicToggle');
const music = document.getElementById('aboutMusic');

/* Initial button state: paused/muted */
musicBtn.textContent = '🔇';
musicBtn.classList.add('muted');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(() => {
      console.log("Autoplay blocked. User interaction required."); 
    });
    musicBtn.textContent = '🔊';
    musicBtn.classList.remove('muted');
    musicBtn.classList.add('playing');
  } else {
    music.pause();
    musicBtn.textContent = '🔇';
    musicBtn.classList.remove('playing');
    musicBtn.classList.add('muted');
  }
});

/* Autoplay video when it comes into view */
const bleachVideo = document.getElementById('bleachVideo');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      bleachVideo.play().catch(() => {
        console.log("Autoplay blocked on mobile — user must tap to play.");
      });
    } else {
      bleachVideo.pause();
    }
  });
}, { threshold: 0.25 });

observer.observe(document.getElementById('serieVideoContainer'));

tracks.forEach(track => {
  track.addEventListener('play', function() {

    
    tracks.forEach(t => {
      if (t !== track) {
        t.pause();
        t.parentElement.querySelector('.music-title')?.classList.remove('playing');
      }
    });

    
    const title = track.parentElement.querySelector('.music-title');
    if (title) {
      title.classList.add('playing');
    }
  });

  track.addEventListener('pause', function() {
    const title = track.parentElement.querySelector('.music-title');
    if (title) {
      title.classList.remove('playing');
    }
  });
});
