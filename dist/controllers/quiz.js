System.register(['jquery', 'rivets', '../services/questions', '../models/question'], function (_export) {
	var $, rivets, QuestionsFactory, Question, Quiz;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	return {
		setters: [function (_jquery) {
			$ = _jquery['default'];
		}, function (_rivets) {
			rivets = _rivets['default'];
		}, function (_servicesQuestions) {
			QuestionsFactory = _servicesQuestions['default'];
		}, function (_modelsQuestion) {
			Question = _modelsQuestion['default'];
		}],
		execute: function () {
			'use strict';

			Quiz = (function () {
				function Quiz(args) {
					_classCallCheck(this, Quiz);

					this.title = args.title;
					this.question;
					this.selectedChoice;
					this.message;

					this.startQuiz();
				}

				_createClass(Quiz, [{
					key: 'startQuiz',
					value: function startQuiz() {
						this.setQuestion(0);
					}
				}, {
					key: 'setQuestion',
					value: function setQuestion(id) {
						var questionData = QuestionsFactory.questions[id];
						this.question = new Question({ question: questionData.question, choices: questionData.choices, correctAnswer: questionData.answer });
					}
				}, {
					key: 'checkAnswer',
					value: function checkAnswer(event, s) {
						var selectedChoice = s.scope.selectedChoice,
						    question = s.scope.question;

						s.scope.message = selectedChoice == question.correctAnswer ? 'you don\'t suck.' : 'you suck';
					}
				}]);

				return Quiz;
			})();

			_export('default', Quiz);
		}
	};
});
//# sourceMappingURL=quiz.js.map