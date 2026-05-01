import { questions } from "./question.js";
const etat = {
  ecran: "accueil",
  indexCourant: 1,
  score: 0,
  reponsesDonnees: [],
};

const startButton = document.querySelector(".start");
const responseButton = document.querySelectorAll(".button");
const nextQuestionButton = document.querySelector(".next-question-button");
const resetButton = document.querySelector(".reset");

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
  let questionEnCours = questions[etat.indexCourant];
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
  const sectionFeedback = document.getElementById("feedback");
  const feedbackIcon = document.querySelector(".feedback-icon");
  const feedbackMessage = document.querySelector(".message");
  const feedbackReponse = document.querySelector(".feedback-reponse");
  const feedbackExplication = document.querySelector(".explication");
  const nextButton = document.querySelector(".next-question-button");

  const questionEnCours = questions[etat.indexCourant];
  const estCorrect = etat.reponsesDonnees[etat.reponsesDonnees.length - 1];

  sectionFeedback.classList.remove("correct", "incorrect");

  if (estCorrect) {
    feedbackIcon.textContent = "\u2705";
    feedbackMessage.textContent = "Bonne réponse !";
    sectionFeedback.classList.add("correct");
  } else {
    feedbackIcon.textContent = "\u274C";
    feedbackMessage.textContent = "Mauvaise réponse !";
    sectionFeedback.classList.add("incorrect");
  }

  feedbackReponse.textContent = "Bonne réponse : " + questionEnCours.options[questionEnCours.correctIndex];
  
  nextButton.textContent = etat.indexCourant < questions.length - 1 ? "Question suivante" : "Voir le résultat";
};

const questionSuivante = () => {
  etat.indexCourant++;

  if (etat.indexCourant < questions.length) {
    showScreen("question");
    afficherQuestion();
  } else {
    nextQuestionButton.textContent = "Afficher résultat";
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

  if (etat.score > questions.length / 2) {
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
