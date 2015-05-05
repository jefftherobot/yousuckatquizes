import $ from 'jquery';
import rivets from 'rivets';
import Quiz from './controllers/quiz';

class YouSuckAtQuizes {

	constructor () {
		//console.log('You suck!') //TODO: http://patorjk.com/software/taag/#p=testall&f=Star%20Wars&t=You%20suck

		this.quiz = new Quiz({title: 'You suck at quizes'});

		//Bind quiz data to HTML
		rivets.bind($('#quiz'), {scope : this.quiz})
	}
}

new YouSuckAtQuizes();