const MINIMUM_RATE = 0.2

module.exports = function getPlaybackRate(input) {
  const rate = input / 800
  return rate > MINIMUM_RATE ? rate : MINIMUM_RATE
}
