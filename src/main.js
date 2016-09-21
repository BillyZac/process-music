require('./style/main.less')

const updateUI = require('./updateUI')
const processMusic = require('./processMusic')

let playbackRateFactor = 1.1

updateUI(playbackRateFactor)
processMusic(playbackRateFactor)
