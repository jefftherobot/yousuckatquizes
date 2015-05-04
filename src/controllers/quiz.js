import QuestionsFactory from '../services/questions';

class Quiz {

	constructor (args) {
		this.title = args.title;
	}

	startQuiz(){};

	getQuestion(id){
		console.log(QuestionsFactory.questions[id])
	};

	checkAnswer(){};

	isOver(){};

	getResult(){};
}

export default Quiz;