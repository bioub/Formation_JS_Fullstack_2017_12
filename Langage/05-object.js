// On manipule souvent des objets existants

// définis au niveau du langage
console.log(typeof Math); // object

// définis au niveau du Node.js
console.log(typeof process); // object

// définis au niveau de Node.js comme au niveau browser
console.log(typeof console); // object

// définis niveau browser
console.log(typeof document); // undefined

// Pour accéder au contenu d'un objet

// on peut utiliser l'opérateur .
console.log(Math.PI); // 3.141592653589793

// ou l'opérateur [] (plus dynamique)
console['log'](Math['PI']); // 3.141592653589793
const key = 'PI';
console['log'](Math[key]); // 3.141592653589793

// En JS, un objet est un système clé / valeur
// comme :
// en C : struct
// en C++ : HashTable
// en Java : Map
// en PHP : tableaux associatifs
// en Python : dictionnaire

// Donc les objets sont extensibles
console.log('Math.sum', Math.sum); // undefined

Math.sum = (a, b) => a + b; // mauvaise pratique d'étendre les objets standard
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

Math.sum = (a, b) => Number(a) + Number(b);
console.log("Math.sum('1', '2')", Math.sum('1', '2')); // 3

delete Math.sum;
console.log('Math.sum', Math.sum); // undefined

// Référence
let nb1 = 1;
let nb2 = nb1; // passage par valeur
nb1 = 2;
console.log(nb2); // 1

let ob1 = { nb: 1 };
let ob2 = ob1; // passage par référence
ob2.nb = 2;
console.log(ob1.nb); // 2

// Tester une fonction Pile ou Face
const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';
// Monkey Patch Math.random
const randomBackup = Math.random;
Math.random = () => 0.25;
console.log(pileOuFace()); // face
Math.random = () => 0.75;
console.log(pileOuFace()); // pile
Math.random = randomBackup;

// 3 cas de créations :
// objet instancié une seule fois => object literal
const coords = {
  x: 10,
  y: 20,
};

console.log(coords.x); // 10
console.log(coords.y); // 20
coords.z = 30;
console.log(coords.z); // 30

const myMaths = {
  sum: (a, b) => a + b,
};
console.log(myMaths.sum(1, 2)); // 3

// objet instancié plusieurs fois sans méthodes => factory function
function coordsFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
  };
}

const coords3d = coordsFactory(10, 20);
console.log(coords3d.x); // 10
console.log(coords3d.y); // 20
console.log(coords3d.z); // 0

// objet instancié plusieurs fois avec méthodes => constructor function
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.getClass = function() {
  return 'Contact';
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain._prenom); // 'Romain' (normalement privée)
console.log(romain.hello()); // 'Bonjour je m'appelle Romain'

const eric = new Contact('Eric');
console.log(eric.hello()); // 'Bonjour je m'appelle Eric'
console.log(romain === eric); // false
console.log(romain.hello === eric.hello); // true

console.log(Contact.getClass()); // Contact (simule static)
