const {expect} = require("chai");
// const getSuggestions = require("../suggestionLogic.js");


describe("getSuggestios",() => {
    const initialAnswers = ['Catalonia holds a second referendum', 'Spain prevents catalonian', 'Spain allows catalonian independence', 'Mariano Rajoy resigns as prime minister', 'Mariano Rajoy dismisses Carles Puigdemont as leader of Catalonia']
    const usersAnswer = 'The prime minister resigns and grants independence';
    it("is a function", () => {
        expect(getSuggestions).to.be.a("function");
    });
    it("returns an ordered array of suggestions", () => {
        expect(Array.isArray(getSuggestions(initialAnswers, usersAnswer))).to.be.true;
        expect(getSuggestions(initialAnswers, usersAnswer)[0]).to.be.an('object')
        expect(getSuggestions(initialAnswers, usersAnswer)[0].rating > getSuggestions(initialAnswers, usersAnswer)[1].rating).to.be.true
    });
});