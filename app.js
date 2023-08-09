const videoEl = document.getElementById('video');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    videoEl.classList.toggle('active');
    
    if(videoEl.classList.contains('active')) {
       videoEl.play();
       btn.innerHTML = `<i class="fa-solid fa-pause">`
    } else {
        videoEl.pause();
        btn.innerHTML = `<i class="fa-solid fa-play">`;
    }
});

