const questions = [
  {
    id: 1,
    question: "Que retourne typeof null en JavaScript ?",
    options: ["null", "undefined", "object", "string"],
    correctIndex: 2,
    explication:
      "C'est un bug historique de JavaScript jamais corrigé pour des raisons de compatibilité. typeof null retourne 'object', alors que null n'est pas un objet.",
  },
  {
    id: 2,
    question: "Quelle est la différence entre == et === en JavaScript ?",
    options: [
      "Il n'y a aucune différence",
      "=== compare la valeur ET le type, == compare uniquement la valeur après conversion",
      "== compare la valeur ET le type, === compare uniquement la valeur",
      "=== est utilisé uniquement pour les chaînes de caractères",
    ],
    correctIndex: 1,
    explication:
      "== effectue une conversion de type (coercition) avant la comparaison — par exemple 0 == '0' retourne true. === compare à la fois la valeur et le type sans conversion — 0 === '0' retourne false. Préfère toujours === pour éviter les comportements inattendus.",
  },
  {
    id: 3,
    question: "Que fait la méthode Array.prototype.map() ?",
    options: [
      "Elle filtre les éléments d'un tableau selon une condition",
      "Elle réduit un tableau à une seule valeur",
      "Elle crée un nouveau tableau en appliquant une fonction à chaque élément",
      "Elle trie les éléments d'un tableau",
    ],
    correctIndex: 2,
    explication:
      "map() parcourt chaque élément du tableau, lui applique la fonction passée en argument, et retourne un nouveau tableau avec les résultats. Le tableau original n'est pas modifié. Exemple : [1, 2, 3].map(x => x * 2) retourne [2, 4, 6].",
  },
  {
    id: 4,
    question: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau ?",
    options: ["shift()", "unshift()", "push()", "pop()"],
    correctIndex: 2,
    explication:
      "push() ajoute un ou plusieurs éléments à la fin du tableau et retourne la nouvelle longueur. Son opposé pop() retire le dernier élément. unshift() ajoute au début, shift() retire le premier élément.",
  },
  {
    id: 5,
    question: "Que signifie le mot-clé 'const' en JavaScript ?",
    options: [
      "La variable peut être réassignée et redéclarée",
      "La variable ne peut ni être réassignée ni redéclarée",
      "La variable peut être réassignée mais pas redéclarée",
      "La variable est accessible uniquement dans une fonction",
    ],
    correctIndex: 1,
    explication:
      "const empêche la réassignation de la variable — tu ne peux pas faire const a = 1 puis a = 2. Attention : pour les objets et tableaux déclarés avec const, le contenu reste modifiable. C'est la référence qui est constante, pas la valeur.",
  },
  {
    id: 6,
    question: "Que retourne cette expression : Boolean(0) ?",
    options: ["true", "false", "0", "undefined"],
    correctIndex: 1,
    explication:
      "0 est une valeur 'falsy' en JavaScript — elle est considérée comme fausse dans un contexte booléen. Les autres valeurs falsy sont : '', null, undefined, NaN, et false lui-même.",
  },
  {
    id: 7,
    question: "Quelle est la bonne syntaxe d'une arrow function ?",
    options: [
      "function => (x) { return x * 2 }",
      "x => function { return x * 2 }",
      "const double = (x) => x * 2",
      "const double = x => function(x * 2)",
    ],
    correctIndex: 2,
    explication:
      "Une arrow function s'écrit avec =>. Si elle n'a qu'une expression, les accolades et le mot return sont optionnels — (x) => x * 2 retourne automatiquement x * 2. C'est une syntaxe plus concise que l'écriture classique avec function.",
  },
  {
    id: 8,
    question: "Que fait la méthode Array.prototype.filter() ?",
    options: [
      "Elle modifie chaque élément du tableau",
      "Elle retourne un nouveau tableau avec les éléments qui passent un test",
      "Elle retourne le premier élément qui correspond à une condition",
      "Elle trie les éléments du tableau",
    ],
    correctIndex: 1,
    explication:
      "filter() parcourt le tableau et retourne un nouveau tableau contenant uniquement les éléments pour lesquels la fonction de test retourne true. Le tableau original n'est pas modifié. Exemple : [1,2,3,4].filter(x => x > 2) retourne [3, 4].",
  },
  {
    id: 9,
    question: "Quelle est la différence entre 'null' et 'undefined' ?",
    options: [
      "Il n'y a aucune différence",
      "null est un objet, undefined est un nombre",
      "undefined signifie qu'une variable est déclarée mais sans valeur, null est une absence de valeur assignée volontairement",
      "undefined est assigné par le développeur, null par le navigateur",
    ],
    correctIndex: 2,
    explication:
      "undefined est la valeur par défaut d'une variable déclarée sans valeur — le moteur JS l'assigne automatiquement. null est une absence de valeur intentionnelle assignée par le développeur pour indiquer explicitement 'pas de valeur ici'.",
  },
  {
    id: 10,
    question: "Que fait la méthode querySelector() ?",
    options: [
      "Elle retourne tous les éléments correspondant au sélecteur CSS",
      "Elle retourne le premier élément correspondant au sélecteur CSS",
      "Elle crée un nouvel élément dans le DOM",
      "Elle supprime un élément du DOM",
    ],
    correctIndex: 1,
    explication:
      "querySelector() retourne le premier élément trouvé dans le DOM qui correspond au sélecteur CSS passé en argument. Pour récupérer tous les éléments correspondants, utilise querySelectorAll() qui retourne une NodeList.",
  },
];

export { questions };
