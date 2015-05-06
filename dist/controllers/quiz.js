System.register(["../services/questions"], function (_export) {
	var QuestionsFactory, Quiz;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	return {
		setters: [function (_servicesQuestions) {
			QuestionsFactory = _servicesQuestions["default"];
		}],
		execute: function () {
			"use strict";

			Quiz = (function () {
				function Quiz(args) {
					_classCallCheck(this, Quiz);

					this.title = args.title;
					this.question;
					this.message;
					this.currentQuestionIndex = 0;

					this.startQuiz();
				}

				_createClass(Quiz, [{
					key: "startQuiz",
					value: function startQuiz() {
						this.setQuestion();
					}
				}, {
					key: "setQuestion",
					value: function setQuestion() {
						var id = this.currentQuestionIndex;
						this.question = QuestionsFactory.questions[id];
					}
				}, {
					key: "checkAnswer",
					value: function checkAnswer(event, s) {
						console.log(s);
						var selectedChoice = s.scope.selectedChoice,
						    question = s.scope.question;

						s.scope.message = selectedChoice == question.answer ? "you don't suck." : "you suck";

						if (selectedChoice == question.answer) {
							setTimeout(function () {
								s.scope.nextQuestion();
							}, 3000);
						}
					}
				}, {
					key: "nextQuestion",
					value: function nextQuestion() {
						this.reset();
						this.currentQuestionIndex++;
						this.setQuestion();
					}
				}, {
					key: "reset",
					value: function reset() {
						this.selectedChoice = null;
						this.message = null;
					}
				}]);

				return Quiz;
			})();

			_export("default", Quiz);
		}
	};
});
//# sourceMappingURL=quiz.js.map