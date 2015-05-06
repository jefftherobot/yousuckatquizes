import QuestionsService from '../services/questionsService';

class Quiz {

	constructor (args) {
		this.title = args.title;
		this.question;
		this.message;
		this.answerMode = true;
		this.selectedChoice;
		this.currentQuestionIndex = 0;

		this.startQuiz();
	}

	startQuiz(){
		this.setQuestion()
	}

	setQuestion(){
		var id = this.currentQuestionIndex;
		this.question = QuestionsService.questions[id];
	}

	checkAnswer(event, s){
		var _this = s.scope,
		    selectedChoice = _this.selectedChoice,
		    question = _this.question;

		_this.answerMode = false;

		_this.message = (selectedChoice == question.answer) ? "you don't suck." : "you suck";

		//TODO: Scoring

		setTimeout(function(){
			_this.nextQuestion();
		},3000)
	}

	nextQuestion(){
		this.reset();
		this.currentQuestionIndex++; //Todo, end quiz after last question
		this.setQuestion()
	}

	reset(){
		this.answerMode=true;
		this.selectedChoice=null;
		this.message=null;
	}
}

export default Quiz;