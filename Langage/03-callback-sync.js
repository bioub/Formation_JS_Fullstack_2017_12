const nbs = [2, 3, 4];

// forEach => ES5 (IE9+)
nbs.forEach(function forEachCb(elt, i) {
  console.log(elt, i);
});

const sumCarresPairs =
  nbs.filter((nb) => nb % 2 === 0)
    .map((nb) => nb * nb)
    .reduce((acc, nb) => acc + nb, 0);

console.log(sumCarresPairs);

function setTimeoutSync(cb, delay) {
  const debut = Date.now();

  while (debut + delay > Date.now()) {}

  cb();
}

setTimeoutSync(() => {
  console.log('1s');
}, 1000)

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |                            cl1s
// |fecb-fecb-fecb => =>  =>    =>
// |fe             ft map rd cl sts clFin
// +--------------------------------------> temps
//
