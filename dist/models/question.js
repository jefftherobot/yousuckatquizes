System.register([], function (_export) {
	var Question;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	return {
		setters: [],
		execute: function () {
			"use strict";

			Question = (function () {
				function Question(args) {
					_classCallCheck(this, Question);

					this.question = args.question;
					this.choices = args.choices;
					this.correctAnswer = args.correctAnswer;
				}

				_createClass(Question, [{
					key: "getCorrectAnswer",
					value: function getCorrectAnswer() {
						return this.correctAnswer;
					}
				}, {
					key: "displayQuestion",
					value: function displayQuestion() {
						console.log(this.question);
					}
				}]);

				return Question;
			})();

			_export("default", Question);
		}
	};
});
//# sourceMappingURL=question.js.map