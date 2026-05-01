import { questions } from "./question.js";
const etat = {
  ecran: "accueil",
  indexCourant: 0,
  score: 0,
  reponsesDonnees: [],
};
// Question en cours...
let questionEnCours = questions[etat.indexCourant];

const startButton = document.querySelector(".start");
const responseButton = document.querySelectorAll(".button");
const nextQuestionButton = document.querySelector(".next-question-button");
const resetButton = document.querySelector(".reset");

//Element de la section feedback
const feedback = document.querySelector("#feedback");
const feedbackIcon = document.querySelector(".feedback-icon");
const feedbackMessage = document.querySelector(".message");
const feedbackExplication = document.querySelector(".explication");
const feedbackReponse = document.querySelector(".feedback-reponse");

//Fonctions de l'app
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

showScreen("accueil");

const startQuiz = () => {
  etat.indexCourant = 0;
  etat.score = 0;
  etat.reponsesDonnees = [];

  showScreen("question");
  afficherQuestion();
};

const afficherQuestion = () => {
  let questionEnCours = questions[etat.indexCourant];
  
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

    bouton.onclick = () => {
      handleReponse(index);
    };
  });
};

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
  console.log(etat.reponsesDonnees);
  showScreen("feedback");
  afficherFeedback();
};

const afficherFeedback = () => {
  const isCorrect = etat.reponsesDonnees[etat.reponsesDonnees.length - 1];
  if (isCorrect) {
    feedbackIcon.innerHTML = "&#x2705;";

    feedbackMessage.textContent = "Bonne réponse";
    feedbackMessage.style.color = "#3fb950";

    feedback.style.backgroundColor = "#0d2818";
  } else {
    feedbackIcon.innerHTML = "&#x274C;";

    feedbackMessage.textContent = "Mauvaise réponse";
    feedbackMessage.style.color = "#f85149";
    feedback.style.backgroundColor = "#2d0f0e";
  }

  feedbackReponse.textContent =
    questionEnCours.options[questionEnCours.correctIndex];

  feedbackExplication.textContent = questionEnCours.explication;
};

const questionSuivante = () => {
  etat.indexCourant++;

  if (etat.indexCourant < questions.length) {
    showScreen("question");
    afficherQuestion();
  } else {
    showScreen("resultat");
    afficherResultat();
  }
};

const afficherResultat = () => {
  showScreen("resultat");
  const trueReponse = etat.reponsesDonnees.filter((goodReponse) => {
    goodReponse == true;
  });
  console.log(trueReponse);

  const note = document.querySelector(".note");
  note.textContent = `${etat.score} / ${questions.length}`;

  const mention = document.querySelector(".mention");
  const observation = document.querySelector(".observation");

  if (etat.score > (questions.length / 2)) {
    mention.innerHTML = `&#x1F389; <br /> excéllent`;
    observation.textContent = "Bon développeur !";
  } else {
    mention.innerHTML = `&#x274C; <br /> Insuffisant`;
    observation.textContent = "Mauvais développeur";
  }
};

startButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", questionSuivante);
resetButton.addEventListener("click", () => showScreen("accueil"));
