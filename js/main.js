let title = document.querySelectorAll('div');



title.forEach(function(el) {
  el.style.display = 'none';
});


let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
