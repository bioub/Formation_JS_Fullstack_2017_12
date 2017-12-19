function externe(msg) {

  function interne() {
    console.log(msg);
  }

  return interne;
}

const helloFct = externe('Hello');
helloFct();

// 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}
