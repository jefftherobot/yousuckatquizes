class QuestionsService {
	constructor () {
		this.questions = [
			{
				question: "Which is the largest country in the world by population?",
				choices: ["India", "USA", "China", "Russia"],
				answer: 2
			},
			{
				question: "When did the second world war end?",
				choices: ["1945", "1939", "1944", "1942"],
				answer: 0
			},
			{
				question: "Which was the first country to issue paper currency?",
				choices: ["USA", "France", "Italy", "China"],
				answer: 3
			},
			{
				question: "Which city hosted the 1996 Summer Olympics?",
				choices: ["Atlanta", "Sydney", "Athens", "Beijing"],
				answer: 0
			},
			{
				question: "Who invented telephone?",
				choices: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
				answer: 1
			}
		];
	}
}

export default new QuestionsService();