module.exports = () => {
  const sourceAudioFileURI = 'bowhill-trimmed.wav'

  let audioContext = new AudioContext()

  const startLoop = (audioBuffer, pan = 0, rate = 1) => {
    let sourceNode = audioContext.createBufferSource()
    let pannerNode = audioContext.createStereoPanner()

    sourceNode.buffer = audioBuffer
    sourceNode.loop = true
    sourceNode.loopStart = 2
    sourceNode.loopEnd = 4
    sourceNode.playbackRate.value = rate
    pannerNode.pan.value = pan

    sourceNode.connect(pannerNode)
    sourceNode.connect(audioContext.destination)

    sourceNode.start(0) // How long to wait before beginning, and the offset from which to begin.
  }

  fetch(sourceAudioFileURI)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    startLoop(audioBuffer, -1, 1)
    startLoop(audioBuffer, 1, 1.2)
  })
  .catch(error => console.error(error))
}
