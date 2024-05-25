document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const openButton = document.querySelector('.open-card');
    const closeButton = document.querySelector('.close-card');
    const audio = document.getElementById('background-audio');

    openButton.addEventListener('click', () => {
        card.classList.add('open');
        audio.play();
    });

    closeButton.addEventListener('click', () => {
        card.classList.remove('open');
        audio.pause();
    });
});
