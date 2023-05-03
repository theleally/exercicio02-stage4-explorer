// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

const students = [
  {
    name: "Leandro",
    gradeOne: 7,
    gradeTwo: 8,
  },
  {
    name: "Ana",
    gradeOne: 8.5,
    gradeTwo: 6.5,
  },
  {
    name: "Ricardo",
    gradeOne: 5,
    gradeTwo: 8,
  },
  {
    name: "Igor",
    gradeOne: 5,
    gradeTwo: 3,
  },
];

const average = (gradeA, gradeB) => {
  let average = (gradeA + gradeB) / 2;
  return average;
};

const approvedDisapproved = (student) => {
  let result = average(student.gradeOne, student.gradeTwo);
  if (result >= 7) {
    return `A média do(a) aluno(a) ${student.name} é: ${result} \nParabéns ${student.name}! Você foi aprovado(a) no concurso!`;
  } else {
    return `A média do(a) aluno(a) ${student.name} é: ${result} \nNão foi dessa vez ${student.name}! Tente novamente!`;
  }
};

for (const student of students) {
  alert(approvedDisapproved(student));
}
