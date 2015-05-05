System.register(['jquery', 'rivets', './controllers/quiz'], function (_export) {
	var $, rivets, Quiz, YouSuckAtQuizes;

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	return {
		setters: [function (_jquery) {
			$ = _jquery['default'];
		}, function (_rivets) {
			rivets = _rivets['default'];
		}, function (_controllersQuiz) {
			Quiz = _controllersQuiz['default'];
		}],
		execute: function () {
			'use strict';

			YouSuckAtQuizes = function YouSuckAtQuizes() {
				_classCallCheck(this, YouSuckAtQuizes);

				//console.log('You suck!') //TODO: http://patorjk.com/software/taag/#p=testall&f=Star%20Wars&t=You%20suck

				this.quiz = new Quiz({ title: 'You suck at quizes' });

				//Bind quiz data to HTML
				rivets.bind($('#quiz'), { scope: this.quiz });
			};

			new YouSuckAtQuizes();
		}
	};
});
//# sourceMappingURL=main.js.map