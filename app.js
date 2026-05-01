import { questions } from "./question.js";
const etat = {
  ecran: "accueil",
  indexCourant: 0,
  score: 0,
  reponsesDonnees: [],
};
let questionEnCours = questions[etat.indexCourant];

const startButton = document.querySelector(".start");
const responseButton = document.querySelectorAll(".button");
const nextQuestionButton = document.querySelector(".next-question-button");
const resetButton = document.querySelector(".reset");
const resQuestion = document.querySelector(".res-question");
const explication = document.querySelector(".explication");
const feedback = document.querySelector("#feedback");

const showScreen = (id) => {
  const screen = document.querySelectorAll(".screen");
  screen.forEach((ecran) => {
    if (ecran.id === id) {
      ecran.classList.add("active");
    } else {
      ecran.classList.remove("active");
    }
  });
  etat.ecran = id;
};

const startQuiz = () => {
  etat.indexCourant = 0;
  etat.score = 0;
  etat.reponsesDonnees = [];

  showScreen("question");
  afficherQuestion();
};

const afficherQuestion = () => {
  const indexColor = document.querySelector(".index-color");
  const QuestionNbr = document.querySelector(".QuestionNbr");
  indexColor.textContent = questions.indexOf(questionEnCours) + 1;
  QuestionNbr.textContent = questions.length;

  const questionText = document.querySelector(".question");
  questionText.textContent = questionEnCours.question;

  const responseOne = document.querySelector(".one");
  responseOne.textContent = questionEnCours.options[0];

  const responseTwo = document.querySelector(".two");
  responseTwo.textContent = questionEnCours.options[1];

  const responseThree = document.querySelector(".three");
  responseThree.textContent = questionEnCours.options[2];

  const responseFour = document.querySelector(".four");
  responseFour.textContent = questionEnCours.options[3];

  responseButton.forEach((bouton, index) => {
    bouton.disabled = false;

    bouton.addEventListener("click", () => {
      handleReponse(index);
    });
  });
};

afficherQuestion();
showScreen("question");

const handleReponse = (indexChoisi) => {
  responseButton.forEach((bouton) => {
    bouton.disabled = true;
  });

  if (indexChoisi === questionEnCours.correctIndex) {
    etat.score++;
    etat.reponsesDonnees.push(true);
  } else {
    etat.reponsesDonnees.push(false);
  }
  showScreen("feedback");
};
