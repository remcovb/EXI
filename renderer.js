const Tone = require("Tone");

const Readable = require('stream').Readable;
class MyStream extends Readable {
  constructor(opts) {
    super(opts);
  }
  _read() {
  }
}
// hook in our stream
process.__defineGetter__('stdin', () => {
  if (process.__stdin) return process.__stdin;
  process.__stdin = new MyStream();
  return process.__stdin;
});

const $sound = document.querySelector('.sound');
const $box = document.querySelector('.box');

const five = require('johnny-five');
const board = new five.Board();

let x, y;

//const synth = new Tone.MonoSynth().toMaster();
var synth = new Tone.PolySynth(3, Tone.Synth, {
  "oscillator" : {
    "type" : "fatsawtooth",
    "count" : 1,
    "spread" : 30,
    // "frequency": 400
  },
  "envelope": {
    "attack": 0.01,
    "decay": 0.1,
    "sustain": 0.1,
    "release": 0.1,
    "attackCurve" : "sine"
  },
}).toMaster();


const play = (x,y) => {

  console.log(x, y);
  if (x < 29) {
    synth.triggerRelease();
    synth.triggerAttack('A2');
  } else if (x > 29 && x < 49) {
    synth.triggerRelease();
    synth.triggerAttack('B2');
  } else if (x > 49 && x < 69) {
    synth.triggerRelease();
    synth.triggerAttack('Db3');
  } else if (x > 69 && x < 89) {
    synth.triggerRelease();
    synth.triggerAttack('D3');
  } else if (x > 89 && x < 109) {
    synth.triggerRelease();
    synth.triggerAttack('E3');
  } else if (x > 109 && x < 129) {
    synth.triggerRelease();
    synth.triggerAttack('Gb3');
  } else if (x > 129 && x < 149) {
    synth.triggerRelease();
    synth.triggerAttack('Ab3');
  } else if (x > 149 && x < 167) {
    synth.triggerRelease();
    synth.triggerAttack('A3');
  } else {
    synth.triggerRelease();
  }
}

$box.addEventListener('mouseover', () => {
  x = event.clientX;
  y = event.clientY;
  play(x,y);
});



$box.addEventListener('mouseout', () => {
  synth.triggerRelease();
});

$box.addEventListener('mouseup', () => {
    synth.triggerRelease();
});

$box.addEventListener('mousedown', () => {
    synth.triggerRelease();
});

$sound.addEventListener('mousedown', () => {

  synth.triggerAttack('A4', '4n');
  // synth.triggerAttack('C4');
  // synth.triggerAttack('E4');
  console.log("Button held");

});


$sound.addEventListener('mouseup', () => {

  synth.triggerRelease();

});


//synth.triggerAttack("D3", "+1");

//const distortion = new Tone.Distortion(0.4).toMaster();
//connect a synth to the distortion
//synth.connect(distortion);


board.on("ready", () => {
  const button = new five.Button(8);

  button.on("hold", function () {
    console.log("Button held");
  });

  button.on("press", function () {
    console.log("Button pressed");
  });

  button.on("release", function () {
    console.log("Button released");
  });
});
