import QuestionsFactory from '../services/questions';

class Quiz {

	constructor (args) {
		this.title = args.title;
		this.question;
		this.message;
		this.currentQuestionIndex = 0;

		this.startQuiz();
	}

	startQuiz(){
		this.setQuestion()
	}

	setQuestion(){
		var id = this.currentQuestionIndex;
		this.question = QuestionsFactory.questions[id];
	}

	checkAnswer(event, s){
		console.log(s)
		var selectedChoice = s.scope.selectedChoice,
		    question = s.scope.question;

		s.scope.message = (selectedChoice == question.answer) ? "you don't suck." : "you suck";

		if(selectedChoice == question.answer){
			setTimeout(function(){
				s.scope.nextQuestion();
			},3000)
		}
	}

	nextQuestion(){
		this.reset();
		this.currentQuestionIndex++;
		this.setQuestion()
	}

	reset(){
		this.selectedChoice=null;
		this.message=null;
	}

}

export default Quiz;