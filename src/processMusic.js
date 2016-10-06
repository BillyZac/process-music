const startLoop = require('./startLoop')
const updateUI = require('./updateUI')
const getPlaybackRate = require('./getPlaybackRate')

module.exports = sourceAudioFileURI => {
  let audioContext = new AudioContext()

  fetch(sourceAudioFileURI)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      let loop1 = startLoop(audioContext, audioBuffer, -1, 1)
      let loop2 = startLoop(audioContext, audioBuffer, 1, 1)
      document.addEventListener('mousemove', event => {
        const rate1 = getPlaybackRate(event.clientX)
        const rate2 = getPlaybackRate(event.clientY)
        loop1.playbackRate.value = rate1
        loop2.playbackRate.value = rate2
        updateUI(rate1, rate2)
      })
    })
    .catch(error => console.error(error))
}
