const pieces = [
  [
    'Ti',
    'Te',
    'Vi',
    'Xi',
    'Pi',
    'Ta',
    'Tu',
    'Ty'
  ],
  [
    'to',
    'co',
    'ko',
    'po',
    'ro',
    'ta',
    'ca',
    'ka',
    'pa',
    'ra',
    'xo',
    'xa'
  ]
]

function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const app = new Vue({
  el: '#app',
  data: {
    name: 'Tito'
  },
  methods: {
    generateName: function () {
      let name = pieces.map(a => randomFromArray(a)).join('')
      if (name == 'Pico') name = 'Boku no ' + name
      this.name = name
    }
  }
})