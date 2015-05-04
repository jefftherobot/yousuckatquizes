System.register([], function (_export) {
	var QuestionsFactory;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	return {
		setters: [],
		execute: function () {
			"use strict";

			QuestionsFactory = function QuestionsFactory() {
				_classCallCheck(this, QuestionsFactory);

				this.questions = [{
					question: "Which is the largest country in the world by population?",
					options: ["India", "USA", "China", "Russia"],
					answer: 2
				}, {
					question: "When did the second world war end?",
					options: ["1945", "1939", "1944", "1942"],
					answer: 0
				}, {
					question: "Which was the first country to issue paper currency?",
					options: ["USA", "France", "Italy", "China"],
					answer: 3
				}, {
					question: "Which city hosted the 1996 Summer Olympics?",
					options: ["Atlanta", "Sydney", "Athens", "Beijing"],
					answer: 0
				}, {
					question: "Who invented telephone?",
					options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
					answer: 1
				}];
			};

			_export("default", new QuestionsFactory());
		}
	};
});
//# sourceMappingURL=questions.js.map