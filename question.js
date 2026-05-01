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
];

export { questions };
