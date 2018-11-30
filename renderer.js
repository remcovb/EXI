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

const $sound = document.querySelector('.sound')

const five = require('johnny-five');
const board = new five.Board();

const synth = new Tone.MonoSynth().toMaster();

$sound.addEventListener('mousedown', () => {

  synth.triggerAttack('A4');
  synth.triggerAttack('C4');
  synth.triggerAttack('E4');
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
