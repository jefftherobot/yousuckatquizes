System.register(['../services/questions'], function (_export) {
	var QuestionsFactory, Quiz;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	return {
		setters: [function (_servicesQuestions) {
			QuestionsFactory = _servicesQuestions['default'];
		}],
		execute: function () {
			'use strict';

			Quiz = (function () {
				function Quiz(args) {
					_classCallCheck(this, Quiz);

					this.title = args.title;
				}

				_createClass(Quiz, [{
					key: 'startQuiz',
					value: function startQuiz() {}
				}, {
					key: 'getQuestion',
					value: function getQuestion(id) {
						console.log(QuestionsFactory.questions[id]);
					}
				}, {
					key: 'checkAnswer',
					value: function checkAnswer() {}
				}, {
					key: 'isOver',
					value: function isOver() {}
				}, {
					key: 'getResult',
					value: function getResult() {}
				}]);

				return Quiz;
			})();

			_export('default', Quiz);
		}
	};
});
//# sourceMappingURL=quiz.js.map