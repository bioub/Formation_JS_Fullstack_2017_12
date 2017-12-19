

setTimeout(() => {
  console.log('1s2');
}, 1200);


setTimeout(() => {
  console.log('1s A');
}, 1000);

setTimeout(() => {
  console.log('1s B');
}, 1000);


console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |
// |          idle  cl1sA cl1sB  idle  cl1s2
// |se clFin ...... =>    =>    ...... =>
// +--------------------------------------> temps
//                  1s    1s001        1s
// file d'attente timer :
//
