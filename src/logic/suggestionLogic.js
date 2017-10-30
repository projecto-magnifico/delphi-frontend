const stringSimilarity = require('string-similarity');

const findSuggestions = (initialAnswers, usersAnswer) => {
    let answers = stringSimilarity.findBestMatch(usersAnswer, initialAnswers);
   return answers.ratings.sort((a,b) => b.rating - a.rating).slice(0,2);

}

export default findSuggestions;