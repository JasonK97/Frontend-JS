document.addEventListener('keydown', function (e) {
    
    if (document.getElementById(e.key) != null) {
        audio = document.getElementById(e.key);
    }
    if(audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
});