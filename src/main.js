import $ from 'jquery';
import rivets from 'rivets';
import Quiz from './controllers/quiz';

class YouSuckAtQuizes {

	constructor () {
		console.log('You suck!') //TODO: http://patorjk.com/software/taag/#p=testall&f=Star%20Wars&t=You%20suck

		new Quiz({title: 'You suck at quizes'})
	}
}
new YouSuckAtQuizes();