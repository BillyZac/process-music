# Process Music

I'm following along to [this fantastic article](http://teropa.info/blog/2016/07/28/javascript-systems-music.html).

## Usage
```
$ npm install # Install dependencies
$ npm start # Start a server
```

Go to http://localhost:3333 and listen!

## Processing music before processing music
I'm using Sox to get the audio ready to use in my project. You could use any audio editor for this, but I thought it would be fun to play around with this one.

If you're on a Mac, you can install Sox by dong this:
```
$ brew install sox
```

Trim the first five seconds by doing this:
```
$ sox bowhill.wav bowhill-trimmed.wav trim 0 5
```
