/*
  Question: Group translation strings by key (Invert Structure)
  Input: {
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au revoir" },
    es: { hello: "Hola" }
  }
  Output: {
    hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
    bye: { en: "Goodbye", fr: "Au revoir" }
  }
*/

// solution
const input = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" },
};

const result = Object.entries(input).reduce((acc, [lang, wordsObj]) => {
  Object.entries(wordsObj).forEach(([key, translation]) => {
    if (!acc[key]) {
      acc[key] = {};
    }

    acc[key][lang] = translation;
  });

  return acc;
}, {});

console.log(result);
