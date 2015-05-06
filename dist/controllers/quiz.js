System.register(["../services/questionsService"], function (_export) {
	var QuestionsService, Quiz;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	return {
		setters: [function (_servicesQuestionsService) {
			QuestionsService = _servicesQuestionsService["default"];
		}],
		execute: function () {
			"use strict";

			Quiz = (function () {
				function Quiz(args) {
					_classCallCheck(this, Quiz);

					this.title = args.title;
					this.question;
					this.message;
					this.answerMode = true;
					this.selectedChoice;
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
						this.question = QuestionsService.questions[id];
					}
				}, {
					key: "checkAnswer",
					value: function checkAnswer(event, s) {
						var _this = s.scope,
						    selectedChoice = _this.selectedChoice,
						    question = _this.question;

						_this.answerMode = false;

						_this.message = selectedChoice == question.answer ? "you don't suck." : "you suck";

						//TODO: Scoring

						setTimeout(function () {
							_this.nextQuestion();
						}, 3000);
					}
				}, {
					key: "nextQuestion",
					value: function nextQuestion() {
						this.reset();
						this.currentQuestionIndex++; //Todo, end quiz after last question
						this.setQuestion();
					}
				}, {
					key: "reset",
					value: function reset() {
						this.answerMode = true;
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