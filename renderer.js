let button6b;
let button1b;
let button1;
let button2;

const Readable = require('stream').Readable;
class MyStream extends Readable {
  constructor(opts) {
    super(opts);
  }
  _read() {
  }
}

const five = require('johnny-five');
const boards = new five.Boards(["A", "B"]);
// hook in our stream
process.__defineGetter__('stdin', () => {
  if (process.__stdin) return process.__stdin;
  process.__stdin = new MyStream();
  return process.__stdin;
});

const Tone = require("Tone");

const $sound = document.querySelector('.sound');
const $box = document.querySelector('.box');

/**
* @fileoverview A sample library and quick-loader for tone.js
*
* @author N.P. Brosowsky (nbrosowsky@gmail.com)
* https://github.com/nbrosowsky/tonejs-instrument
*/

console.log("tonejs lib gevonden");

var SampleLibrary = {
  minify: false,
  ext: '.[mp3|ogg]', // use setExt to change the extensions on all files // do not change this variable //
  baseUrl: '/samples/',
  list: ['bass-electric', 'bassoon', 'cello', 'clarinet', 'contrabass', 'flute', 'french-horn', 'guitar-acoustic', 'guitar-electric', 'guitar-nylon', 'harmonium', 'harp', 'organ', 'piano', 'saxophone', 'trombone', 'trumpet', 'tuba', 'violin', 'xylophone'],
  onload: null,

  setExt: function (newExt) {
    var i
    for (i = 0; i <= this.list.length - 1; i++) {
      for (var property in this[this.list[i]]) {

        this[this.list[i]][property] = this[this.list[i]][property].replace(this.ext, newExt)
      }


    }
    this.ext = newExt;
    return console.log("sample extensions set to " + this.ext)
  },

  load: function (arg) {
    var t, rt, i;
    (arg) ? t = arg : t = {};
    t.instruments = t.instruments || this.list;
    t.baseUrl = t.baseUrl || this.baseUrl;
    t.onload = t.onload || this.onload;

    // update extensions if arg given
    if (t.ext) {
      if (t.ext != this.ext) {
        this.setExt(t.ext)
      }
      t.ext = this.ext
    }

    rt = {};

    // if an array of instruments is passed...
    if (Array.isArray(t.instruments)) {
      for (i = 0; i <= t.instruments.length - 1; i++) {
        var newT = this[t.instruments[i]];
        //Minimize the number of samples to load
        if (this.minify === true || t.minify === true) {
          var minBy = 1;
          if (Object.keys(newT).length >= 17) {
            minBy = 2
          }
          if (Object.keys(newT).length >= 33) {
            minBy = 4
          }
          if (Object.keys(newT).length >= 49) {
            minBy = 6
          }

          var filtered = Object.keys(newT).filter(function (_, i) {
            return i % minBy != 0;
          })
          filtered.forEach(function (f) {
            delete newT[f]
          })

        }




        rt[t.instruments[i]] = new Tone.Sampler(
          newT, {
            baseUrl: t.baseUrl + t.instruments[i] + "/",
            onload: t.onload
          }

        )
      }

      return rt

      // if a single instrument name is passed...
    } else {
      newT = this[t.instruments];

      //Minimize the number of samples to load
      if (this.minify === true || t.minify === true) {
        minBy = 1;
        if (Object.keys(newT).length >= 17) {
          minBy = 2
        }
        if (Object.keys(newT).length >= 33) {
          minBy = 4
        }
        if (Object.keys(newT).length >= 49) {
          minBy = 6
        }

        filtered = Object.keys(newT).filter(function (_, i) {
          return i % minBy != 0;
        })
        filtered.forEach(function (f) {
          delete newT[f]
        })
      }




      var s = new Tone.Sampler(
        newT, {
          baseUrl: t.baseUrl + t.instruments + "/",
          onload: t.onload
        }
      )

      return s
    }

  },

  'bass-electric': {
    'A#2': 'As2.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'A#4': 'As4.[mp3|ogg]',
    'A#5': 'As5.[mp3|ogg]',
    'C#2': 'Cs2.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'C#4': 'Cs4.[mp3|ogg]',
    'C#5': 'Cs5.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'E5': 'E5.[mp3|ogg]',
    'G2': 'G2.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G4': 'G4.[mp3|ogg]',
    'G5': 'G5.[mp3|ogg]'
  },

  'bassoon': {
    'A3': 'A3.[mp3|ogg]',
    'C2': 'C2.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'G1': 'G1.[mp3|ogg]',
    'G2': 'G2.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'A1': 'A1.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]'

  },

  'cello': {
    'E3': 'E3.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F3': 'F3.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'F#4': 'Fs4.[mp3|ogg]',
    'G2': 'G2.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G4': 'G4.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'G#3': 'Gs3.[mp3|ogg]',
    'G#4': 'Gs4.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A#2': 'As2.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'A#4': 'As4.[mp3|ogg]',
    'B2': 'B2.[mp3|ogg]',
    'B3': 'B3.[mp3|ogg]',
    'B4': 'B4.[mp3|ogg]',
    'C2': 'C2.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'C#4': 'Cs4.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'D#4': 'Ds4.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]'

  },

  'clarinet': {
    'D3': 'D3.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D5': 'D5.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F3': 'F3.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'F#5': 'Fs5.[mp3|ogg]',
    'A#2': 'As2.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'A#4': 'As4.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]'

  },

  'contrabass': {
    'C1': 'C1.[mp3|ogg]',
    'C#2': 'Cs2.[mp3|ogg]',
    'D1': 'D1.[mp3|ogg]',
    'E1': 'E1.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'F#0': 'Fs0.[mp3|ogg]',
    'F#1': 'Fs1.[mp3|ogg]',
    'G0': 'G0.[mp3|ogg]',
    'G#1': 'Gs1.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'A1': 'A1.[mp3|ogg]',
    'A#0': 'As0.[mp3|ogg]',
    'B2': 'B2.[mp3|ogg]'

  },

  'flute': {
    'A5': 'A5.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C6': 'C6.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'E5': 'E5.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]'

  },

  'french-horn': {
    'D2': 'D2.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D#1': 'Ds1.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'G1': 'G1.[mp3|ogg]',
    'A0': 'A0.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'C1': 'C1.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',

  },

  'guitar-acoustic': {
    'F3': 'F3.[mp3|ogg]',
    'F#1': 'Fs1.[mp3|ogg]',
    'F#2': 'Fs2.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'G1': 'G1.[mp3|ogg]',
    'G2': 'G2.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G#1': 'Gs1.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'G#3': 'Gs3.[mp3|ogg]',
    'A1': 'A1.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A#1': 'As1.[mp3|ogg]',
    'A#2': 'As2.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'B1': 'B1.[mp3|ogg]',
    'B2': 'B2.[mp3|ogg]',
    'B3': 'B3.[mp3|ogg]',
    'C2': 'C2.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C#2': 'Cs2.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'C#4': 'Cs4.[mp3|ogg]',
    'D1': 'D1.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D#1': 'Ds1.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'E1': 'E1.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'F1': 'F1.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]'

  },


  'guitar-electric': {
    'D#3': 'Ds3.[mp3|ogg]',
    'D#4': 'Ds4.[mp3|ogg]',
    'D#5': 'Ds5.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'F#2': 'Fs2.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'F#4': 'Fs4.[mp3|ogg]',
    'F#5': 'Fs5.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A5': 'A5.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C6': 'C6.[mp3|ogg]',
    'C#2': 'Cs2.[mp3|ogg]'
  },

  'guitar-nylon': {
    'F#2': 'Fs2.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'F#4': 'Fs4.[mp3|ogg]',
    'F#5': 'Fs5.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G5': 'G3.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'G#4': 'Gs4.[mp3|ogg]',
    'G#5': 'Gs5.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A5': 'A5.[mp3|ogg]',
    'A#5': 'As5.[mp3|ogg]',
    'B1': 'B1.[mp3|ogg]',
    'B2': 'B2.[mp3|ogg]',
    'B3': 'B3.[mp3|ogg]',
    'B4': 'B4.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'C#4': 'Cs4.[mp3|ogg]',
    'C#5': 'Cs5.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D5': 'D5.[mp3|ogg]',
    'D#4': 'Ds4.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'E5': 'E5.[mp3|ogg]'
  },


  'harmonium': {
    'C2': 'C2.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C#2': 'Cs2.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'C#4': 'Cs4.[mp3|ogg]',
    'C#5': 'Cs5.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D5': 'D5.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'D#4': 'Ds4.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F3': 'F3.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'F#2': 'Fs2.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'G2': 'G2.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G4': 'G4.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'G#3': 'Gs3.[mp3|ogg]',
    'G#4': 'Gs4.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A#2': 'As2.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'A#4': 'As4.[mp3|ogg]'
  },

  'harp': {
    'C5': 'C5.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D6': 'D6.[mp3|ogg]',
    'D7': 'D7.[mp3|ogg]',
    'E1': 'E1.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'E5': 'E5.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'F6': 'F6.[mp3|ogg]',
    'F7': 'F7.[mp3|ogg]',
    'G1': 'G1.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G5': 'G5.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A6': 'A6.[mp3|ogg]',
    'B1': 'B1.[mp3|ogg]',
    'B3': 'B3.[mp3|ogg]',
    'B5': 'B5.[mp3|ogg]',
    'B6': 'B6.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]'

  },

  'organ': {
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C6': 'C6.[mp3|ogg]',
    'D#1': 'Ds1.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'D#4': 'Ds4.[mp3|ogg]',
    'D#5': 'Ds5.[mp3|ogg]',
    'F#1': 'Fs1.[mp3|ogg]',
    'F#2': 'Fs2.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'F#4': 'Fs4.[mp3|ogg]',
    'F#5': 'Fs5.[mp3|ogg]',
    'A1': 'A1.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A5': 'A5.[mp3|ogg]',
    'C1': 'C1.[mp3|ogg]',
    'C2': 'C2.[mp3|ogg]'
  },

  'piano': {
    'A0': 'A0.[mp3|ogg]',
    'A1': 'A1.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A5': 'A5.[mp3|ogg]',
    'A6': 'A6.[mp3|ogg]',
    'A#0': 'As0.[mp3|ogg]',
    'A#1': 'As1.[mp3|ogg]',
    'A#2': 'As2.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'A#4': 'As4.[mp3|ogg]',
    'A#5': 'As5.[mp3|ogg]',
    'A#6': 'As6.[mp3|ogg]',
    'B0': 'B0.[mp3|ogg]',
    'B1': 'B1.[mp3|ogg]',
    'B2': 'B2.[mp3|ogg]',
    'B3': 'B3.[mp3|ogg]',
    'B4': 'B4.[mp3|ogg]',
    'B5': 'B5.[mp3|ogg]',
    'B6': 'B6.[mp3|ogg]',
    'C0': 'C0.[mp3|ogg]',
    'C1': 'C1.[mp3|ogg]',
    'C2': 'C2.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C6': 'C6.[mp3|ogg]',
    'C7': 'C7.[mp3|ogg]',
    'C#0': 'Cs0.[mp3|ogg]',
    'C#1': 'Cs1.[mp3|ogg]',
    'C#2': 'Cs2.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'C#4': 'Cs4.[mp3|ogg]',
    'C#5': 'Cs5.[mp3|ogg]',
    'C#6': 'Cs6.[mp3|ogg]',
    'D0': 'D0.[mp3|ogg]',
    'D1': 'D1.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D5': 'D5.[mp3|ogg]',
    'D6': 'D6.[mp3|ogg]',
    'D#0': 'Ds0.[mp3|ogg]',
    'D#1': 'Ds1.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'D#4': 'Ds4.[mp3|ogg]',
    'D#5': 'Ds5.[mp3|ogg]',
    'D#6': 'Ds6.[mp3|ogg]',
    'E0': 'E0.[mp3|ogg]',
    'E1': 'E1.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'E5': 'E5.[mp3|ogg]',
    'E6': 'E6.[mp3|ogg]',
    'F0': 'F0.[mp3|ogg]',
    'F1': 'F1.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F3': 'F3.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'F5': 'F5.[mp3|ogg]',
    'F6': 'F6.[mp3|ogg]',
    'F#0': 'Fs0.[mp3|ogg]',
    'F#1': 'Fs1.[mp3|ogg]',
    'F#2': 'Fs2.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'F#4': 'Fs4.[mp3|ogg]',
    'F#5': 'Fs5.[mp3|ogg]',
    'F#6': 'Fs6.[mp3|ogg]',
    'G0': 'G0.[mp3|ogg]',
    'G1': 'G1.[mp3|ogg]',
    'G2': 'G2.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G4': 'G4.[mp3|ogg]',
    'G5': 'G5.[mp3|ogg]',
    'G6': 'G6.[mp3|ogg]',
    'G#0': 'Gs0.[mp3|ogg]',
    'G#1': 'Gs1.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'G#3': 'Gs3.[mp3|ogg]',
    'G#4': 'Gs4.[mp3|ogg]',
    'G#5': 'Gs5.[mp3|ogg]',
    'G#6': 'Gs6.[mp3|ogg]'
  },

  'saxophone': {
    'D#4': 'Ds4.[mp3|ogg]',
    'E2': 'E2.[mp3|ogg]',
    'E3': 'E3.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F3': 'F3.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'F#2': 'Fs2.[mp3|ogg]',
    'F#3': 'Fs3.[mp3|ogg]',
    'F#4': 'Fs4.[mp3|ogg]',
    'G2': 'G2.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G4': 'G4.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'G#3': 'Gs3.[mp3|ogg]',
    'G#4': 'Gs4.[mp3|ogg]',
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A#2': 'As2.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'B2': 'B2.[mp3|ogg]',
    'B3': 'B3.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C#2': 'Cs2.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'C#4': 'Cs4.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]'

  },

  'trombone': {
    'A#2': 'As2.[mp3|ogg]',
    'C2': 'C2.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]',
    'C#1': 'Cs1.[mp3|ogg]',
    'C#3': 'Cs3.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D#1': 'Ds1.[mp3|ogg]',
    'D#2': 'Ds2.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'F1': 'F1.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F3': 'F3.[mp3|ogg]',
    'G#1': 'Gs1.[mp3|ogg]',
    'G#2': 'Gs2.[mp3|ogg]',
    'A#0': 'As0.[mp3|ogg]',
    'A#1': 'As1.[mp3|ogg]'

  },

  'trumpet': {
    'C5': 'C5.[mp3|ogg]',
    'D4': 'D4.[mp3|ogg]',
    'D#3': 'Ds3.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'F3': 'F3.[mp3|ogg]',
    'F4': 'F4.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'A2': 'A2.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A#3': 'As3.[mp3|ogg]',
    'C3': 'C3.[mp3|ogg]'

  },

  'tuba': {
    'A#1': 'As1.[mp3|ogg]',
    'A#2': 'As2.[mp3|ogg]',
    'D2': 'D2.[mp3|ogg]',
    'D3': 'D3.[mp3|ogg]',
    'D#1': 'Ds1.[mp3|ogg]',
    'F0': 'F0.[mp3|ogg]',
    'F1': 'F1.[mp3|ogg]',
    'F2': 'F2.[mp3|ogg]',
    'A#0': 'As0.[mp3|ogg]'

  },

  'violin': {
    'A3': 'A3.[mp3|ogg]',
    'A4': 'A4.[mp3|ogg]',
    'A5': 'A5.[mp3|ogg]',
    'A6': 'A6.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C6': 'C6.[mp3|ogg]',
    'C7': 'C7.[mp3|ogg]',
    'E4': 'E4.[mp3|ogg]',
    'E5': 'E5.[mp3|ogg]',
    'E6': 'E6.[mp3|ogg]',
    'G4': 'G4.[mp3|ogg]',
    'G5': 'G5.[mp3|ogg]',
    'G6': 'G6.[mp3|ogg]'

  },

  'xylophone': {
    'C7': 'C7.[mp3|ogg]',
    'G3': 'G3.[mp3|ogg]',
    'G4': 'G4.[mp3|ogg]',
    'G5': 'G5.[mp3|ogg]',
    'G6': 'G6.[mp3|ogg]',
    'C4': 'C4.[mp3|ogg]',
    'C5': 'C5.[mp3|ogg]',
    'C6': 'C6.[mp3|ogg]'

  }


}

const $sound2 = document.querySelector('.sound2');
const $sound3 = document.querySelector('.sound3');
const $sound4 = document.querySelector('.sound4');
const $sound5 = document.querySelector('.sound5');


const $guitar = document.querySelector('.guitar');
const $bass = document.querySelector('.bass');
const $piano = document.querySelector('.piano');
const $xylophone = document.querySelector('.xylophone');
const $choose = document.querySelector('.choose');
const $intro = document.querySelector('.intro');

let values = [];

let instrument = 'piano';
let chosen = true;
let played = false;


let selectedInstrument = SampleLibrary.load({
  instruments: instrument,
  baseUrl: "lib/samples/"
});


Tone.Buffer.on('load', () => {


  boards.on("ready", () => {

    console.log(boards[0]);
    console.log(boards[1]);







    if (boards[0]) {


      button1 = new five.Button({
        pin: 3,
        board: boards[0]
      });

      button1.on("press", function () {

        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C2");
      });

      button2 = new five.Button({
        pin: 5,
        board: boards[0]
      });

      button2.on("press", function () {

        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C3");
      });

      const button3 = new five.Button({
        pin: 7,
        board: boards[0]
      });

      button3.on("press", function () {

        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C4");
      });

      const button4 = new five.Button({
        pin: 9,
        board: boards[0]
      });

      const proximity4 = new five.Proximity({
        controller: "HCSR04",
        pin: 10,
        board: boards[0]
      });

      button4.on("press", function () {

        proximity4.on("data", function () {

          if (values.length < 1) {
            values.push(this.cm);
          }





          if (values[0] <= 10 && !played) {
            //console.log("under 3cm");

            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("B3");

            played = true;

          } else if (values[0] >= 11 && values[0] <= 20 && !played) {
            //console.log("between 3cm & 6cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("C2");
            played = true;


          } else if (values[0] >= 21 && values[0] <= 30 && !played) {
            // console.log("between 6cm & 9cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("D3");
            played = true;


          } else if (values[0] >= 31 && values[0] <= 40 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E3");
            played = true;


          } else if (values[0] >= 41 && values[0] <= 3000 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E4");
            played = true;


          }

          return;
        })


      });






      button4.on("release", function () {

        played = false;
        values = [];

      });

      const button5 = new five.Button({
        pin: 11,
        board: boards[0]
      });

      button5.on("press", function () {
        console.log("button 5 pin 11 pressed");
        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C6");
      });

      const button6 = new five.Button({
        pin: 13,
        board: boards[0]
      });

      const proximity6 = new five.Proximity({
        controller: "HCSR04",
        pin: 12,
        board: boards[0]
      });

      button6.on("press", function () {

        proximity6.on("data", function () {

          if (values.length < 1) {
            values.push(this.cm);
          }



          if (values[0] <= 10 && !played) {
            //console.log("under 3cm");

            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("B3");

            played = true;

          } else if (values[0] >= 11 && values[0] <= 20 && !played) {
            //console.log("between 3cm & 6cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("C2");
            played = true;


          } else if (values[0] >= 21 && values[0] <= 30 && !played) {
            // console.log("between 6cm & 9cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("D3");
            played = true;


          } else if (values[0] >= 31 && values[0] <= 40 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E3");
            played = true;


          } else if (values[0] >= 41 && values[0] <= 3000 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E4");
            played = true;


          }

          return;
        })


      });






      button6.on("release", function () {

        played = false;
        values = [];

      });

      const button7 = new five.Button({
        pin: 2,
        board: boards[0]
      });



    }

    if (boards[1]) {

      button1b = new five.Button({
        pin: 3,
        board: boards[1]
      });

      button1b.on("press", function () {

        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C2");
      });


      const button2b = new five.Button({
        pin: 5,
        board: boards[1]
      });

      const proximity2b = new five.Proximity({
        controller: "HCSR04",
        pin: 4,
        board: boards[1]
      });

      button2b.on("press", function () {

        proximity2b.on("data", function () {

          if (values.length < 1) {
            values.push(this.cm);
          }



          if (values[0] <= 10 && !played) {
            //console.log("under 3cm");

            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("B3");

            played = true;

          } else if (values[0] >= 11 && values[0] <= 20 && !played) {
            //console.log("between 3cm & 6cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("C2");
            played = true;


          } else if (values[0] >= 21 && values[0] <= 30 && !played) {
            // console.log("between 6cm & 9cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("D3");
            played = true;


          } else if (values[0] >= 31 && values[0] <= 40 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E3");
            played = true;


          } else if (values[0] >= 41 && values[0] <= 3000 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E4");
            played = true;


          }

          return;
        })


      });






      button2b.on("release", function () {

        played = false;
        values = [];

      });

      const button3b = new five.Button({
        pin: 7,
        board: boards[1]
      });

      button3b.on("press", function () {

        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C4");
      });

      const button4b = new five.Button({
        pin: 9,
        board: boards[1]
      });

      button4b.on("press", function () {

        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C5");
      });

      const button5b = new five.Button({
        pin: 11,
        board: boards[1]
      });

      const proximity5b = new five.Proximity({
        controller: "HCSR04",
        pin: 10,
        board: boards[1]
      });

      button5b.on("press", function () {

        proximity5b.on("data", function () {

          if (values.length < 1) {
            values.push(this.cm);
          }





          if (values[0] <= 10 && !played) {
            //console.log("under 3cm");

            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("B3");

            played = true;

          } else if (values[0] >= 11 && values[0] <= 20 && !played) {
            //console.log("between 3cm & 6cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("C2");
            played = true;


          } else if (values[0] >= 21 && values[0] <= 30 && !played) {
            // console.log("between 6cm & 9cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("D3");
            played = true;


          } else if (values[0] >= 31 && values[0] <= 40 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E3");
            played = true;


          } else if (values[0] >= 41 && values[0] <= 3000 && !played) {
            //console.log("between 9cm & 50cm");
            selectedInstrument.triggerRelease();
            selectedInstrument.toMaster();
            selectedInstrument.triggerAttack("E4");
            played = true;


          }

          return;
        })


      });






      button5b.on("release", function () {

        played = false;
        values = [];

      });



      button6b = new five.Button({
        pin: 13,
        board: boards[1]
      });

      button6b.on("press", function () {

        selectedInstrument.triggerRelease();
        selectedInstrument.toMaster();
        selectedInstrument.triggerAttack("C2");
      });



    }


    const buttonChooseInstrument = new five.Button({
      pin: 2,
      board: boards[1]
    });

    buttonChooseInstrument.on("press", function () {
      $intro.classList.add('hide');


      chosen = false

      if (chosen === false) {
        $guitar.classList.remove('show');
        $bass.classList.remove('show');
        $piano.classList.remove('show');
        $xylophone.classList.remove('show');
        $choose.classList.add('show');
        chooseInstrument();
      } else {
        console.log(instrument);
      }
    });

    const chooseInstrument = () => {

      button6b.on("press", function () {
        if (!chosen) {

          instrument = "guitar-electric";
          chosen = true;
          selectedInstrument = SampleLibrary.load({
            instruments: instrument,
            baseUrl: "lib/samples/"
          });

          $bass.classList.remove('show');
          $piano.classList.remove('show');
          $xylophone.classList.remove('show');
          $choose.classList.remove('show');
          $guitar.classList.add('show');
          return;
        }
      });

      button1b.on("press", function () {
        if (!chosen) {

          instrument = 'piano';
          chosen = true;
          selectedInstrument = SampleLibrary.load({
            instruments: instrument,
            baseUrl: "lib/samples/"
          });

          $guitar.classList.remove('show');
          $bass.classList.remove('show');
          $xylophone.classList.remove('show');
          $choose.classList.remove('show');
          $piano.classList.add('show');
          return;
        }
      });

      button1.on("press", function () {
        if (!chosen) {

          instrument = 'xylophone';
          chosen = true;
          selectedInstrument = SampleLibrary.load({
            instruments: instrument,
            baseUrl: "lib/samples/"
          });

          $guitar.classList.remove('show');
          $bass.classList.remove('show');
          $piano.classList.remove('show');
          $choose.classList.remove('show');
          $xylophone.classList.add('show');
          return;
        }
      });

      button2.on("press", function () {
        if (!chosen) {

          instrument = 'bass-electric';
          chosen = true;
          selectedInstrument = SampleLibrary.load({
            instruments: instrument,
            baseUrl: "lib/samples/"
          });

          $guitar.classList.remove('show');
          $piano.classList.remove('show');
          $xylophone.classList.remove('show');
          $choose.classList.remove('show');
          $bass.classList.add('show');
          return;
        }
      });


    }



  }); //einde van adruino boards
});


