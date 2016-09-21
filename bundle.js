/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const processMusic = __webpack_require__(1)

	processMusic()


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);