// mobile nav

const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button_icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  })

  // video

const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoFile = document.querySelector('#video-story');
const videoOverlay = document.querySelector('#video-story-overlay');

videoFile.addEventListener('click', function () {

  function toggleOverlay(event){
    if(event.type === 'mouseleave') {
      videoOverlay.classList.add('hidden');
    } else {
      videoOverlay.classList.remove('hidden');
    }
  }

  if ( videoFile.paused) {
    videoFile.play();
    videoBtnIcon.src ="./img/icon2.svg"; 

    videoFile.onmouseleave = toggleOverlay;
    videoFile.onmouseenter = toggleOverlay;

  } else {
    videoFile.pause();
    videoBtnIcon.src ="./img/Icon/large/Group.png";
    videoFile.onmouseleave = null
    videoFile.onmouseenter = null;
  }

})