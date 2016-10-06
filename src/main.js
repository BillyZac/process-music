require('./style/main.less')

const updateUI = require('./updateUI')
const processMusic = require('./processMusic')

const sourceAudioFileURI = './audio/bowhill-trimmed.wav'

processMusic(sourceAudioFileURI)
