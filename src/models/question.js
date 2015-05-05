class Question {
	constructor(args){
		this.question = args.question;
		this.choices = args.choices;
		this.correctAnswer = args.correctAnswer;
	}

	getCorrectAnswer() {
		return this.correctAnswer;
	};

	displayQuestion() {
		console.log(this.question)
	}
}

export default Question;