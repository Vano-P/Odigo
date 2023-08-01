const playVideo = document.querySelector('#play')
const video = document.querySelector('#video')

playVideo.addEventListener('click', () => {
    playVideo.style.display = 'none'
    video.style.display = 'block'
})