import $ from 'jquery';
import rivets from 'rivets';
import QuestionsFactory from '../services/questions';
import Question from '../models/question';

class Quiz {

	constructor (args) {
		this.title = args.title;
		this.question;
		this.selectedChoice;
		this.message;

		this.startQuiz();
	}

	startQuiz(){
		this.setQuestion(0)
	}

	setQuestion(id){
		var questionData = QuestionsFactory.questions[id];
		this.question = new Question({question: questionData.question, choices: questionData.choices, correctAnswer: questionData.answer});
	}

	checkAnswer(event, s){
		var selectedChoice = s.scope.selectedChoice,
		    question = s.scope.question;

		s.scope.message = (selectedChoice == question.correctAnswer) ? "you don't suck." : "you suck";
	}

}

export default Quiz;