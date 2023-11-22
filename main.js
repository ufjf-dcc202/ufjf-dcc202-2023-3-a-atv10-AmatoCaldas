let maria = 2;
let joao = 1;

function setMaria() {
  maria = 1;
}

function setJoao() {
  joao = 1;
}

function deJoaoParaMaria() {
  maria = maria + joao;
  joao = 0;
}

function deMariaParaJoao() {
  joao = joao + maria;
  maria = 0;
}

function getMaria() {}

function getJoao() {}
